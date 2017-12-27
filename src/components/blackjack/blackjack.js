import React, { Component } from 'react';
import { PickFrom } from '../pick-out-of-four';
import './blackjack.css';
import { formatNumbers, formatButtonNumbers } from '../../helpers/format-numbers';


class Blackjack extends Component {
  constructor () {
    super();
    this.state = {
      stake: 1,
      profit: 0,
      loss: 0,
      numTimes: 0,
      stop: false,
      running: false,
      handsPlayed: 0,
      stakeIndex: 0,
      possibleStakes: [1,5,25,100,500,2500,10000, 50000, 250000, 100000, 500000, 2500000, 10000000]
    };
    this.playBlackjack = this.playBlackjack.bind(this);
    this.setNumberTimes = this.setNumberTimes.bind(this);
    this.stopPlay = this.stopPlay.bind(this);
    this.increaseStake = this.increaseStake.bind(this);
    this.decreaseStake = this.decreaseStake.bind(this);

  }

  increaseStake () {
    let newStateIndex = this.state.stakeIndex + 1;
    let stake = this.state.possibleStakes[newStateIndex];
    this.setState({
      stakeIndex: newStateIndex,
      stake: stake
    });
  }

  decreaseStake () {
    let newStateIndex = this.state.stakeIndex - 1;
    let stake = this.state.possibleStakes[newStateIndex];
    this.setState({
      stakeIndex: newStateIndex,
      stake
    });
  }
  stopPlay () {
    this.setState({
      stop: true,
      running: false,
      numTimes: 0
    });
  }
  setNumberTimes (number) {
    let getNumTimes = this.state.numTimes;
    let newNumTimes = getNumTimes += number;
    this.setState({
      numTimes: newNumTimes
    });
  }

  async playBlackjack () {
    if (!this.state.numTimes || this.state.running) {
      await this.playHand();
      return;
    }
    this.setState({
      stop: false,
      running: true
    }, async () => {
      while(this.state.numTimes > 0 && !this.state.stop) {
        await this.playHand();
        await this.changeState();
      }
    })
  }

  changeState () {
    return new Promise((resolve, reject) => {
      let getNumTimes = this.state.numTimes;
      let newNumTimes = getNumTimes - 1;
      let resetRunning = this.state.numTimes === 1 ? false : true;
      this.setState({
        numTimes: newNumTimes,
        running: resetRunning
      }, () => {
        resolve();
      })
    });
  }

  playHand () {
      return new Promise((resolve, reject) => {
        let waitTime = this.state.running ? 500 : 0;
        let newHandsPlayed = this.state.handsPlayed + 1;
        setTimeout(async () => {
          const stake = this.state.stake;
          const winOrLose = Math.round(Math.random() * 100);
          let getNumTimes = this.state.numTimes;
          let newNumTimes = getNumTimes--;
          if (winOrLose <= 50) {
            let newLoss = this.state.loss - stake;
            this.setState({
              numTimes: newNumTimes,
              loss: newLoss,
              handsPlayed: newHandsPlayed
            })
            this.props.updateMoney(-stake)
            resolve();
          } else
          if (winOrLose >= 90) {
            let newWin = this.state.profit + stake + (stake / 2);
            this.setState({
              numTimes: newNumTimes,
              profit: newWin,
              handsPlayed: newHandsPlayed
            });
            this.props.updateMoney(stake + (stake / 2))
            resolve();
          } else {
            let newWin = this.state.profit + stake;
            this.setState({
              numTimes: newNumTimes,
              profit: newWin,
              handsPlayed: newHandsPlayed
            });
            this.props.updateMoney(stake)
            resolve();
          }
        }, 10)
      });
  }

  render () {
    return (
      <div className="blackjack-main">
      <h1>BLACKJACK</h1>
      <ul>
        <li><b>Stake:</b>&nbsp;{this.state.stake}</li>
        <li><b>Profit:</b>&nbsp; {formatNumbers(this.state.profit + this.state.loss)}</li>
        <li><b>Hands played: &nbsp; {this.state.handsPlayed}</b></li>
      </ul>
      <div className="columns">
        <p className="column">STAKE: &nbsp; {formatButtonNumbers(this.state.stake)}</p>
        <div className="column">
          <a className="button" onClick={this.decreaseStake}>-</a>
          <a className="button" onClick={this.increaseStake} >+</a>
        </div>
      </div>
       <PickFrom amount = {[10, 50, 250, 1000]} passedFunc={this.setNumberTimes} title="HOW MANY HANDS"/>
        <a className="button is-danger is-large play-blackjack" onClick={this.playBlackjack} >Play Blackjack</a>
        <a className="button stop-button" onClick={this.stopPlay}>STOP</a>
      </div>
    );
  }
}

export default Blackjack;

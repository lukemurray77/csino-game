import React, {Component} from 'react';
import './blackjack.css';

class Blackjack extends Component {
  constructor () {
    super();
    this.state = {
      stake: 1,
      chips: 0,
      profit: 0,
      loss: 0
    };
    this.setStake = this.setStake.bind(this);
    this.playBlackjack = this.playBlackjack.bind(this);
    this.cashOut = this.cashOut.bind(this);

  }
  buyChips (amount) {
    const chips = this.state.chips + amount;
    this.props.updateMoney(-amount);
    this.setState({
      chips
    });
  }

  setStake (stake) {
    this.setState({
      stake
    });
  }

  cashOut () {
    this.setState({
      chips: 0
    });
    this.props.updateMoney(this.state.chips);
  }

  playBlackjack () {
    const stake = this.state.stake;
    const winOrLose = Math.round(Math.random() * 100);
    let newChips;
    let chips;
    if (winOrLose <= 50) {
      chips = this.state.chips;
      newChips = chips - stake;
      this.setState({
        chips: newChips
      });
    } else
    if (winOrLose >= 90) {
      chips = this.state.chips;
      newChips = chips + stake + (stake / 2);
      this.setState({
        chips: newChips
      });
    } else {
      chips = this.state.chips;
      newChips = chips + stake;
      this.setState({
        chips: newChips
      });
    }

  }

  render () {
    return (
      <div className="blackjack-main">
       <div onClick={this.setStake}>Stake: {this.state.stake}</div>
       <div>Chips: {this.state.chips}</div>
       <div>Profit: {this.state.profit}</div>
       <div>Loss: {this.state.loss}</div>
       <div>SET STAKE</div>
        <div className="set-stake">
          <button onClick={this.setStake.bind(this, 1)}>1</button>
          <button onClick={this.setStake.bind(this, 5)}>5</button>
          <button onClick={this.setStake.bind(this, 25)}>25</button>
          <button onClick={this.setStake.bind(this, 100)}>100</button>
        </div>
        <div>BUY CHIPS</div>
        <div className="buy-chips">
          <button onClick={this.buyChips.bind(this, 100)}>100</button>
          <button onClick={this.buyChips.bind(this, 500)}>500</button>
          <button onClick={this.buyChips.bind(this, 2500)}>2500</button>
          <button onClick={this.buyChips.bind(this, 10000)}>10000</button>
        </div>
        <div><button className="play-blackjack" onClick={this.playBlackjack}>Play Blackjack</button></div>
        <div><button className="cash-out" onClick={this.cashOut}>Cash Out</button></div>
      </div>
    );
  }
}

export default Blackjack;

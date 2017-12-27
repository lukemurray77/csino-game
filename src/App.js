import React, { Component } from 'react';

import Blackjack from './components/blackjack/blackjack';
import Story from './components/story/story';
import Updates from './components/updates/updates';
import Sparkline from './components/sparkline/sparkline';
import {formatNumbers} from './helpers/format-numbers';
import 'bulma/css/bulma.css'


class App extends Component {
  constructor() {
    super();

    this.state = {
      money: 100,
      level: 'rank amateur',
      chartData: [100]
    }
    this.updateMoney = this.updateMoney.bind(this);
    this.saveState = this.saveState.bind(this);
  }
  componentDidMount () {
    if (localStorage.getItem('state')){
      this.setState(JSON.parse(localStorage.getItem('state')))
    }
  }

  saveState() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  updateMoney(amount){
    let money = this.state.money;
    let newChartData = this.state.chartData.slice();
    // if (newChartData.length > 1000) {
    //   newChartData = newChartData.slice(-100);
    // }
    money += amount;
    newChartData.push(money);

    this.setState({
      money,
      chartData: newChartData
    })
  }

  render() {
    return (
      <div className="container App">
        <header className="container columns App-header">
          <h1 className="App-title">CLICKER</h1>
              <div className="column">
                <a className="button is-large" onClick={this.saveState}>SAVE</a>
              </div>
              <div className='column'>
                Money: {formatNumbers(this.state.money)}
              </div>
              <div className='column'>
                Level: {this.state.level}
              </div>
              <div className='column'>
                <Sparkline sparklineData={this.state.chartData} />
              </div>
        </header>
        <div className="columns">
          <div className="column">
            <Blackjack updateMoney={this.updateMoney}/>
          </div>
          <div className="column">
            <Story />
          </div>
          <div className="column">
            <Updates />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// make money Component

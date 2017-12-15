import React, { Component } from 'react';

import Blackjack from './components/blackjack';

class App extends Component {
  constructor() {
    super();
    this.state = {
      money: 100,
      level: 'rank amateur'
    }
    this.updateMoney = this.updateMoney.bind(this);
  }
  updateMoney(amount){
    console.log(this.state);
    let money = this.state.money;
    money += amount;
    this.setState({
      money
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GAMBLING GLORY</h1>
        </header>
        <div>
          Money: {this.state.money}
        </div>
        <div>
          Level: {this.state.level}
        </div>
        <Blackjack updateMoney={this.updateMoney}/>
      </div>
    );
  }
}

export default App;
// make money Component

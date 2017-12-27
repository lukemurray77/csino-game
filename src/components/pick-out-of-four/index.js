import React, {Component} from 'react';
import { formatButtonNumbers } from '../../helpers/format-numbers';

export class PickFrom extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (amount) => (e) => {
    this.props.passedFunc(amount);
  }
  render () {
    let buttons = this.props.amount.map((el, i) => {
      return (
        <a className='button is-small' onClick={this.handleClick(this.props.amount[i])}>{formatButtonNumbers(this.props.amount[i])}</a>
      )
    })
    return (
      <div>
        <div>{this.props.title}</div>
         <div className={this.props.title}>
          {buttons}
         </div>
       </div>
    );
  }
}

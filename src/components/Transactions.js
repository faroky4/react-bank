
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';

import Transaction from './Transaction'

class Transactions extends Component {
  constructor() {
    super()

    this.state = {
      
    }
  }

  render(){
    return (
        <Transaction key={this.props.data} data={this.props.data} delete={this.props.delete}/>
    )
  }
  
}

export default Transactions;

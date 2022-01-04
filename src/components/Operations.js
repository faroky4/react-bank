
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';

import Transactions from './Transactions';

class Operations extends Component {
  constructor() {
    super()

    this.state = {
      amount: 0,
      vendor: " ",
      category: " "
    }
  }
  
  updateAmount = (e)=>{
    this.setState({amount: e.target.value})
    console.log(this.state.amount);
  }
  updateVendor= (e)=>{
    this.setState({vendor: e.target.value})
    console.log(this.state.vendor);
  }
  updateCategory = (e)=>{
    this.setState({category: e.target.value})
  }

  addDepositTransactions()
  {
    let body = this.state;
    console.log(this.state);
    //const res = axios.post('http://localhost:5500/transaction' ,body)
  }
  async addWithdrawTransactions()
  {
    let body = {
      amount: this.state.amount*(-1),
      vendor: this.state.vendor,
      category: this.state.category
    }
    console.log(body.amount);
    const res = await axios.post('http://localhost:5500/transaction' , body)
    
  }

  render(){
    return (
      <div>
        <input id='amount' type="number" value={this.state.amount} onChange={this.updateAmount}/>
        <input id='vendor' onChange={this.updateVendor} type="text" value={this.state.vendor} />
        <input id='category' type="text" value={this.state.category} onChange={this.updateCategory}/>
        <button onClick={this.addDepositTransactions}>Deposit</button>
        <button onClick={this.addWithdrawTransactions}>Withdraw</button>
      </div>
      
    )

  }
  
}

export default Operations;


import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';

import Transactions from './Transactions';
import { Redirect } from 'react-router-dom';

class Operations extends Component {
  constructor() {
    super()

    this.state = {
      amount: "",
      vendor: "",
      category: "",
      redirect: false
    }
  }
  
  updateAmount = (e)=>{
    this.setState({amount: e.target.value})
    
  }
  updateVendor= (e)=>{
    this.setState({vendor: e.target.value})
  }
  updateCategory = (e)=>{
    this.setState({category: e.target.value})
  }

  addDepositTransactions = () => {
    this.props.deposit(parseInt(this.state.amount) , this.state.vendor , this.state.category)
    this.setState({
      amount: "",
      vendor: "",
      category: "",
      redirect: true
    })
  }
  
   addWithdrawTransactions = ()=> {
     this.props.withdraw(parseInt(this.state.amount *-1) , this.state.vendor , this.state.category)
     this.setState({
      amount: "",
      vendor: "",
      category: "",
      redirect: true
    })
   }

  render(){
    return (
      <div>
        <input id='amount' type="number" placeholder='amount' value={this.state.amount} onChange={this.updateAmount}/>
        <input id='vendor' type="text" placeholder='vendor' value={this.state.vendor} onChange={this.updateVendor}/>
        <input id='category' type="text" placeholder='category' value={this.state.category} onChange={this.updateCategory}/>
        <button onClick={this.addDepositTransactions}>Deposit</button>
        <button onClick={this.addWithdrawTransactions}>Withdraw</button>
        {this.state.redirect ? <Redirect to="/transactions"/> : null}
      </div>
      
    )

  }
  
}

export default Operations;

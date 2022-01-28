
import { Component } from 'react/cjs/react.production.min';
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
  
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
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
        <input 
          id='amount'
          type="number" 
          name='amount'
          placeholder='amount' 
          value={this.state.amount} 
          onChange={this.handleChange}/>

        <input 
          id='vendor' 
          type="text" 
          name='vendor'
          placeholder='vendor' 
          value={this.state.vendor} 
          onChange={this.handleChange}/>

        <input 
          id='category' 
          type="text" 
          name='category'
          placeholder='category' 
          value={this.state.category} 
          onChange={this.handleChange}/>

        <button onClick={this.addDepositTransactions}>Deposit</button>
        <button onClick={this.addWithdrawTransactions}>Withdraw</button>
        {this.state.redirect ? <Redirect to="/transactions"/> : null}
      </div>
      
    )

  }
  
}

export default Operations;

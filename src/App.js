
import { Component } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'

import Transactions from './components/Transactions';
import Transaction from './components/Transaction';
import Operations from './components/Operations';
import { Redirect } from 'react-router-dom';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      data:[],
      transactions:[],
      totalAmount : 0,
    }
  }

  async componentDidMount (){
    await this.getTransactions();
    this.getTotalAmount()
  }

  async getTransactions()
  {
    const res = await axios.get('http://localhost:5500/transactions')
    this.setState({ data: res.data })
  }

  async addTransaction(body)
  {
    this.setState({totalAmount:0})
    const res = await axios.post('http://localhost:5500/transaction' ,body);
    let tempData = [...this.state.data]
    tempData.push(body);
    this.setState({
      data: tempData},
      this.getTotalAmount
    )
  }
  async deletTransaction(body)
  { 
    this.setState({totalAmount:0})
    const res = await axios.delete('http://localhost:5500/transaction' ,{data:{body}});
    let tempData = [...this.state.data]
    tempData.map(t=> {
      if(t._id === body._id)
        tempData.splice(body)
    })
    this.setState({
      data: tempData},
      this.componentDidMount
    )
    this.getTransactions()
  }

  getTotalAmount() {
    (this.state.data).map(t => {
      this.setState({totalAmount: this.state.totalAmount+=t.amount})
    })
  }

  deposit = (amount, vendor, category) => {
    const body = {amount, vendor, category}
    this.addTransaction(body)
  }

  withdraw = (amount, vendor, category) => {
    const body = {amount, vendor, category}
    this.addTransaction(body)
  }
  delete = (transaction)=> {
    this.deletTransaction(transaction)
  }
  
  render(){
    
    return (
      <Router>
        <div className="App">
          
          <Link className='link' to="/"> Home </Link>
          <Link className='link' to="/transactions"> Transactions </Link>
          <Link className='link' to="/operations"> Operations </Link>
          <div className='total-amount'>
            <h4> Total Amount: {this.state.totalAmount}</h4>
          </div>
          
          <Route exact path="/transactions" render={()=>
            <Transactions data={this.state.data} delete={this.delete} />} />
          <Route exact path="/operations" render={()=>
            <Operations deposit={this.deposit} withdraw={this.withdraw} />} />
        </div>
      </Router>
    );
  }
  
}

export default App;


import { Component } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'

import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Category from './components/Category';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      transactions:[],
      totalAmount : 0,
      categories : {}
    }
  }

  async componentDidMount(){
    await this.getTransactions();
    this.getTotalAmount()
    this.updateCategories();
  }

  async getTransactions()
  {
    const res = await axios.get('http://localhost:5500/transactions')
    this.setState({ transactions: res.data })
    
  }

  async addTransaction(body)
  {
    const res = await axios.post('http://localhost:5500/transaction' ,body);

    let tempTransactions = [...this.state.transactions]
    tempTransactions.push(body);
    this.setState({
      transactions: tempTransactions
    })
    this.getTotalAmount()
    this.updateCategories()
  }
  async deletTransaction(body)
  { 
    const id = body._id
    const res = await axios.delete(`http://localhost:5500/transaction/${id}`)
    .then(this.componentDidMount())
    .catch(function(error){
      console.log((error.response.data));
    })
    
  }

  getTotalAmount() {
    
    let amount = 0 
    
    for(let trans of this.state.transactions){
      amount += trans.amount
    }
    
    this.setState({
      totalAmount: amount
    })
  }

  updateCategories() {
    
    let tempCategory = {}

    for(let trans of this.state.transactions) {
      if(tempCategory.hasOwnProperty(trans.category)){
        tempCategory[trans.category] += trans.amount
      }
      else{
        tempCategory[trans.category] = trans.amount
      }
    }
    this.setState({
      categories: tempCategory
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
          <Link className='link' to="/categories"> Categories </Link>
          <div className='total-amount'>
            <h4> Total Amount: {this.state.totalAmount}</h4>
          </div>
          
          <Route exact path="/transactions" render={()=>
            <Transactions data={this.state.transactions} delete={this.delete} />} />
          <Route exact path="/operations" render={()=>
            <Operations deposit={this.deposit} withdraw={this.withdraw} />} />
          <Route exact path="/categories" render={()=>
            <Category categories={this.state.categories} />} />
        </div>
      </Router>
    );
  }
  
}

export default App;

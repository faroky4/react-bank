
import { Component } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import axios from 'axios';


import Transactions from './components/Transactions';
import Transaction from './components/Transaction';
import Operations from './components/Operations';

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
    // (this.state.data).map(t => {
    //   this.setState({totalAmount: this.state.totalAmount+=t.amount})
    // })
  }
  async getTransactions()
  {
    const res = await axios.get('http://localhost:5500/transactions')
    this.setState({ data: res.data })
  }
  
  
  render(){
    
    return (
      <Router>
        <div className="App">
          
          <Link to="/"> Transactions </Link>
          <Link to="/operations"> Operations </Link>
          <div>{this.state.totalAmount}</div>
          
          <Route exact path="/" render={()=><Transactions data={this.state.data}/>} />
          <Route exact path="/operations" render={()=><Operations data={this.state.data}/>} />
          
        </div>
      </Router>
    );
  }
  
}

export default App;

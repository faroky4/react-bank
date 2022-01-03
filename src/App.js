
import { Component } from 'react/cjs/react.production.min';
import Transactions from './components/Transactions';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      data:[
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      totalAmount : 0
    }
  }

  updateTestText = (event) => {

    this.setState({
      data: event.target.value
    })
  }

  componentDidMount (){
  
    (this.state.data).map(t => {
      this.setState({totalAmount: this.state.totalAmount+=t.amount})
    })
  }
  
  render(){

    return (
      <div className="App">
        <header className="App-header">
        <div>{this.state.totalAmount}</div>
        <input type="text" value={this.state.data[0].amount} onChange={this.updateTestText}/>

        <Transactions key={this.state.data} data={this.state.data}/>
          
        </header>
      </div>
    );
  }
  
}

export default App;

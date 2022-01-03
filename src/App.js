
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
      ]
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div>hello</div>
        <Transactions data={this.state.data}/>
        {/* {this.state.data[0].amount} */}
          
        </header>
      </div>
    );
  }
  
}

export default App;

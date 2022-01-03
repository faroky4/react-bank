
import { Component } from 'react/cjs/react.production.min';

class Transactio extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  
  render(){
    return (
        <div className='transaction'>
            {this.props.data.map((t)=> {
                console.log(t.amount);
                // <span>{t.amount}</span>
            })}
            {/* {this.props.data[0].amount} */}
        </div>
    )
  }
  
}

export default Transactio;

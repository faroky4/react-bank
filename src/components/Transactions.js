
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';

import Transaction from './Transaction'

class Transactions extends Component {

  render(){
    return (
      <div className='transaction'>
            {(this.props.data).map(t => 
                <div>
                  <Transaction key={t} data={t} delete={this.props.delete}/>
                </div>

            )}
      </div>
    )
  }
  
}

export default Transactions;


import { Component } from 'react/cjs/react.production.min';

class Transaction extends Component {

  deleteTransaction =(transaction)=>
  {
    this.props.delete(transaction)
  }
  
  render(){
    let transaction = this.props.data
    return (
        <div className='transaction'>
            {
              <div>
                <span>{transaction.amount} </span>
                <span>{transaction.vendor} </span>
                <span>{transaction.category} </span>
                <button onClick={()=>this.deleteTransaction(transaction)}> Delete </button>
              </div>

            }
        </div>
    )
  }
  
}

export default Transaction;

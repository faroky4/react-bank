
import { Component } from 'react/cjs/react.production.min';

class Transaction extends Component {
  constructor() {
    super()
    
  }

  deleteTransaction =(body)=>
  {
    this.props.delete(body)
  }
  
  render(){
    return (
        <div className='transaction'>
            {(this.props.data).map(t => 
                <div>
                  <span>{t.amount} </span>
                  <span>{t.vendor} </span>
                  <span>{t.category} </span>
                  <button onClick={()=>this.deleteTransaction(t)}> Delete </button>
                </div>

            )}
        </div>
    )
  }
  
}

export default Transaction;

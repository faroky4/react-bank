
import { Component } from 'react/cjs/react.production.min';

class Category extends Component {

  render(){
    let categories = this.props.categories
    return (
        
        <div>
            {Object.keys(categories).map((key , value) => 
                <div>
                    <span>{key} : {categories[key]}</span> 
                </div>
            )}
        </div>
    )
  }
  
}

export default Category;

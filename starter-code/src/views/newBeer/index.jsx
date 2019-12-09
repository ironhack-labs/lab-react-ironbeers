import React, { Component } from 'react';
// import Product from '../../components/Product';

// import { listProducts } from '../../services/product';

// import './style.scss';

class NewBeer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    search:""
  };
  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  // console.log(event.target.value)
  this.setState({
    search: event.target.value
  })
  // console.log(this.state)
  this.props.search(event.target.value)
}

render() {
    return (
      <div class = "search">
        <input 
         type="text" 
         placeholder="Search..." 
         name="search"
         onChange={this.handleInputChange}
        /> 
      </div>
    )
}
}
}

export default NewBeer;
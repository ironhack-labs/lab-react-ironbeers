import React, { Component } from 'react';

import Navbar from '../navbar/Navbar'

class AddBeer extends Component {
  constructor(){
    super();
    this.state={
      beers: []
    };
  }

  render() {
    return(
      <div>
        <Navbar />
        <h1>Add beer</h1>
      </div>
    )
  }
}

export default AddBeer;
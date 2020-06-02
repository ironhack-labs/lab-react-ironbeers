import React, { Component } from 'react';

class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      singleBeer: {},
    };
  }
  render() {
    return (
      <div>
        <h3>I'm a single beer found with Id</h3>
      </div>
    );
  }
}

export default SingleBeer;

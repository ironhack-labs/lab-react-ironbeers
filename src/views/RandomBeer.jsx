import React, { Component } from 'react';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {},
    };
  }
  render() {
    return (
      <div>
        <h3>Random Beer</h3>
      </div>
    );
  }
}

export default RandomBeer;

import React, { Component } from 'react';
import Nav from '../components/Nav.jsx';
// import axios from 'axios';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    //   random: beers[Math.floor(Math.random() * beers.length)],
    };
  }
//   componentDidMount() {
//     axios.get('https://ih-beers-api.herokuapp.com/beers').then(response => {
//       this.setState({ beers: response.data });
//     });
//   }


  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default RandomBeer;

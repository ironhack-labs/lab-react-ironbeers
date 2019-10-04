import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: []
    };
  }

  componentDidMount() {
    let url = `http://localhost:5000/random`;
    axios.get(url).then(res => {
      this.setState({ randomBeer: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="beer-detail">
          <img
            src={this.state.randomBeer.image_url}
            alt={this.state.randomBeer.name + " photo"}
          ></img>
          <h1>{this.state.randomBeer.name}</h1>
          <h3>{this.state.randomBeer.tagline}</h3>
          <p>Contributed by: {this.state.randomBeer.contributed_by}</p>
          {/* <Link to="/random">GET ANOTHER ONE AT RANDOM!</Link> */}
        </div>
      </React.Fragment>
    );
  }
}

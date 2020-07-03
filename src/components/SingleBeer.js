import React, { Component } from 'react';
import axios from 'axios';
import Home from './Home';
import { Link } from 'react-router-dom';
class SingleBeer extends Component {
  state = {
    singleBeer: {},
  };
  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    // console.log(res.data);
    let currentBeer = res.data.find((beer) => {
      return beer.name == this.props.match.params.id;
    });
    this.setState({
      singleBeer: currentBeer,
    });
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state.singleBeer);
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <img src={this.state.singleBeer.image_url} />
        <h1>{this.state.singleBeer.name}</h1>
        <div>{this.state.singleBeer.tagline}</div>
        <div>{this.state.singleBeer.first_brewed}</div>
        <div>{this.state.singleBeer.description}</div>
        <div>{this.state.singleBeer.contributed_by}</div>
      </div>
    );
  }
}

export default SingleBeer;

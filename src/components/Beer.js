import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
    console.log('The props', this.props);
  }

  componentDidMount = () => {
    axios
      .get(
        `https://ironbeer-api.herokuapp.com/beers/single/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        console.log('BEER------', res.data);
        this.setState({
          beer: res.data
        });
      })
      .catch(err => console.log(err, 'Could not get all beers'));
  };

  render() {
    return (
      <div>
        <img src={this.state.beer.image_url} alt="" />
        <h3>{this.state.beer.name}</h3>
        <p>{this.state.beer.tagline}</p>
        <p>Created By: {this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default Beer;

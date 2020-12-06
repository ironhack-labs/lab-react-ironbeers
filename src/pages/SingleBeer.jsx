import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import axios from 'axios';
import './SingleBeer.css';

class SingleBeer extends React.Component {
  state = {
    singleBeer: '',
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      return axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
        )
        .then((resp) => this.setState({ singleBeer: resp.data }));
    }
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((resp) => this.setState({ singleBeer: resp.data }));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="singleBeer">
          <img src={this.state.singleBeer.image_url} />
          <h1>{this.state.singleBeer.name}</h1>
          <p>{this.state.singleBeer.tagline}</p>
          <p>{this.state.singleBeer.description}</p>
          <p>{this.state.singleBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

SingleBeer.propTypes = {};

export default SingleBeer;

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export class Details extends Component {
  state = {
    oneBeer: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((oneBeerData) => {
        this.setState({ oneBeer: oneBeerData.data });
        console.log('here', oneBeerData.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="beer-box-details">
          <img
            src={this.state.oneBeer.image_url}
            className="beer-img-details"
            alt="detail-beer-img"
          />
          <h1>{this.state.oneBeer.name}</h1>
          <h3> {this.state.oneBeer.tagline} </h3>
          <h5>{this.state.oneBeer.description}</h5>
          <p>{this.state.oneBeer.contributed_by}</p>
        </div>
        <button className="back-btn" onClick={this.props.history.goBack}>
          Go Back
        </button>
      </div>
    );
  }
}

export default Details;

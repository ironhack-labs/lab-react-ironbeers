import React from 'react';
import { getBeerById } from '../../services/api-client';
import './BeerDetail.css';

class BeerDetail extends React.Component {
  state = {
    beer: [],
  };

  fetchBeerById = () => {
    getBeerById(this.props.match.params.id).then((beer) => {
      this.setState({ beer });
    });
  };

  componentDidMount() {
    this.fetchBeerById();
  }

  componentWillUnmount() {
    this.setState({ beer: [] });
  }

  render() {
    return (
      <div className="detail-container">
        <div className="detail">
          <div className="name">{this.state.beer.name}</div>
          <img className="image" src={this.state.beer.image_url}></img>
          <div className="description">{this.state.beer.tagline}</div>
          <div className="creator">
            <span className="creator-one">Created by:</span>
            <span className="creator-two">
              {this.state.beer.contributed_by}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetail;

import React from 'react';
import './singleBeer.css';
import NavBar from '../NavBar/NavBar';
import { getSingleBeer } from '../../services/Services';

class SingleBeer extends React.Component {
  state = {
    beer: {},
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    getSingleBeer(id).then((response) => {
      this.setState({
        beer: response,
      });
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <>
          <div className="container single-beer-item" key={this.state.beer._id}>
            <div className="single-beer-img-card">
              <img
                className="single-beer-image"
                src={this.state.beer.image_url}
              />
            </div>
            <div>
              <div className="single-beer-name">
                <h4>{this.state.beer.name}</h4>
                <h5>{this.state.beer.attenuation_level}</h5>
              </div>
              <div className="single-beer-tagline">
                <p>{this.state.beer.tagline}</p>
                <p className="text">
                  <b>{this.state.beer.first_brewed}</b>
                </p>
              </div>
              <p className="text">{this.state.beer.description}</p>
              <p>
                <b>{this.state.beer.contributed_by}</b>
              </p>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default SingleBeer;

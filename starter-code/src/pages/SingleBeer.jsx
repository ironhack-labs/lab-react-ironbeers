import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/SingleBeer.css';

class SingleBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then((res) => {
        this.setState({
          beer: res.data,
        });
      })
      .catch((err) => {
        console.log(`Whoops looks like the fridge is empty!`);
      });
  }

  render() {
    return (
      <div className="SingleBeer">
        {this.state.beer && (
          <div className="SingleBeer-detail">
            <img
              src={this.state.beer.image_url}
              alt={this.state.beer.image_url}
              className="SingleBeer-img"
            />
            <h1 className="SingleBeer-name">{this.state.beer.name}</h1>
            <h3 className="SingleBeer-tagline">{this.state.beer.tagline}</h3>
            <h4 className="SingleBeer-brewed">
              {this.state.beer.first_brewed}
            </h4>
            <p className="SingleBeer-level">
              {this.state.beer.attenuation_level}
            </p>
            <p className="SingleBeer-description">{this.state.description}</p>
            <small className="SingleBeer-contributor">
              {this.state.beer.contributed_by}
            </small>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBeer;

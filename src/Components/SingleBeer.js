import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Navbar from './Navbar';

class SingleBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get(
        'https://ih-beers-api2.herokuapp.com/beers/' +
          this.props.match.params.id
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          beer: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="col text-center">
            <h4 className="display-4">Single Beer Detail</h4>
          </div>
        </div>
        {this.state.beer ? (
          <div className="container">
            <div className="row mb-3 border">
              <div className="col-2 text-center align-self-center">
                <img
                  className="img-fluid smallImage py-2"
                  src={this.state.beer.image_url}
                ></img>
              </div>

              <div className="col align-self-center">
                <div className="col">
                  <h2 className="display-4">{this.state.beer.name}</h2>
                  <p className="h5 text-muted">{this.state.beer.tagline}</p>
                  <br />
                  <p>
                    <h4 className="h6">Description</h4>
                    {this.state.beer.description}
                  </p>
                  <p>
                    <h4 className="h6">Brewers Tips</h4>
                  <p>{this.state.beer.brewers_tips}</p>
                  </p>
                </div>
              </div>
            </div>

            {/* 
            <div className="media">
              <img
                className="align-self-center m-5 smallImage"
                src={this.state.beer.image_url}
              ></img>

              <div className="media-body align-self-center">
                <h2 className="display-2">{this.state.beer.name}</h2>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.brewers_tips}</p>
              </div>
            </div> */}
          </div>
        ) : (
          'no beer'
        )}
      </div>
    );
  }
}

export default SingleBeer;

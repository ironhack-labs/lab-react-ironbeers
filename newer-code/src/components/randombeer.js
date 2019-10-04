import React, { Component } from "react";
import axios from "axios";
export default class randombeer extends Component {
  state = {
    beer: {}
  };
  componentDidMount() {
    
    ;
    axios.get("https://api.punkapi.com/v2/beers").then(response => {
    let randomIndex = Math.floor(Math.random() * response.data.length)
      this.setState({ beer: response.data[randomIndex] });
    });
  }

  render() {
  
        return (
          <div className="ml-auto mr-auto mt-4 text-center">
            <div className="mx-auto text-center">
              <img
                className="mx-auto"
                width="64px"
                alt={this.state.beer.name}
                src={this.state.beer.image_url}
              />
            </div>
            <div className="container  detail-row">
              <div className="row">
                <div className="col-8 text-left">
                  <h2>{this.state.beer.name}</h2>
                  <p>{this.state.beer.tagline}</p>
                </div>
                <div className="col-4 mt-2">
                  <p>{this.state.beer.attenuation_level}</p>
                  <p>{this.state.beer.first_brewed}</p>
                </div>
                <div>
                  <p className="text-left">
                    {this.state.beer.description}
                  </p>
                  <small>
                    {this.state.beer.contributed_by}
                  </small>
                </div>
              </div>
            </div>
          </div>
        );
      }
    
  
}

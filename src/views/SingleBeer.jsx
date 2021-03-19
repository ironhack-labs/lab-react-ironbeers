import React, { Component } from 'react'
import axios from "axios";

class SingleBeer extends Component {

    state = {
        beer: null,
      };

      componentDidMount() {
        const id = this.props.match.params.beerId;
        console.log(id);
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
          .then((response) => {
            console.log(response);
            // With axios, your response data will always be at
            // response.data
    
            this.setState({ beer: response.data });
    
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    

    render() {
        if (this.state.beer === null) {
            return <div>Loading...</div>;
          }
        return (
            <div>
              <h1>One Beer</h1>
              <h2>
                  {this.state.beer.name} 
              </h2>
              <h3>   <img src={this.state.beer.image_url} alt="" /></h3>
              <h4>{this.state.beer.tagline} </h4>
              <h4>{this.state.beer.first_brewed} </h4>
              <h4>{this.state.beer.attenuation_level} </h4>
              <h5>{this.state.beer.description} </h5>
              <h6>{this.state.beer.contributed_by} </h6>
            </div>
        )
    }
}

export default SingleBeer;
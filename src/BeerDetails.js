import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar"

class BeerDetails extends Component{
    state = {
        beer: "",
      };
      componentDidMount = async () => {
        try {
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
          );
          console.log(response);
          this.setState({ beer: { ...response.data } });
        } catch (err) {
          console.error(err);
        }
      };
    render=()=>{
        return(
            <div>
            <Navbar/>
            <div className="mt-5 text-center container">
            <img src={this.state.beer.image_url} width="100px"></img>
            <h1>{this.state.beer.name}</h1>
            <h4>{this.state.beer.tagline} &nbsp; {this.state.beer.first_brewed} </h4>
            <h5>{this.state.beer.attenuation_level} </h5>
            <p className="text-justify">{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
            </div>
            </div>
        )
    }
}





export default BeerDetails;
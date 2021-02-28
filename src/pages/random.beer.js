import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class randomBeers extends Component {
  state = {
    random: {},
  };

  getRandomBeer = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        const data = response.data;
        this.setState({ random: data });
        console.log(data)

      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    return (
      <div key= {this.state.random.ebc} id="random-beer">

        <div>
          {
           <div>
               <img src={this.state.random.image_url} ></img> 
               <h3>{this.state.random.name}</h3>
                <h4>{this.state.random.tagline}</h4>
               <p>{this.state.random.attenuation_level}</p>
               <p>{this.state.random.description}</p>
               <p>{this.state.random.contributed_by}</p>



            </div>
          }
        </div>
      </div>
    );
  }
}

export default randomBeers;
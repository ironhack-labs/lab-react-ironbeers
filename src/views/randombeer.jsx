import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";

export default class randombeer extends Component {
state = {
  random : []
}


  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then((responseFromApi) => {
    console.log("random",responseFromApi.data);
      this.setState({
        random: responseFromApi.data,
      });
    });
  }

  render() {
    return (
      <div >
      <div className="home screenl"><NavLink exact to="/" className="link"><i class="fas fa-home" ></i></NavLink></div>
      <div className="randombeer">
               <img src={this.state.random.image_url} alt=""/>
               <div className="randomcontent">
               <div className="flex">
               <h3>{this.state.random.name}</h3> 
               <h3>{this.state.random.attenuation_level}</h3>
               </div>
               <div className="flex">
               <h5>{this.state.random.tagline}</h5>
               <h5>{this.state.random.first_brewed}</h5>
               </div>
               <p>{this.state.random.description}</p>
               <h6>{this.state.random.contributed_by}</h6>
               </div>
            </div>

    </div>
    )
  }
}

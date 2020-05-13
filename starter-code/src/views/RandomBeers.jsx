import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

export class RandomBeer extends React component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRandomBeer = () => {
        const {params} = this.props.match;
        console.log('params', params)
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((apiResponse) => {
                const data = apiResponse.dara;
                this.setState(data)
            })
    }
    componentDidMount(){
        this.getRandomBeer();
    }
  
  
  render(){
      if (!this.state.beers) return null
    
      return (
            <div>
            <NavBar />
            <h1>{this.state.name}</h1>
            <img src={this.state.image_url} alt=""/>
            <h3>{this.state.tagline}</h3>
            <ul>
                <li> First brewed {this.state.first_brewed} </li>
                <li> Attenuation level {this.state.attenuation_level} </li>
            </ul>
            <p>{this.state.description}</p>
            <p>{this.state.contributed_by}</p>
            </div>
        );
    }
};

export default RandomBeer;

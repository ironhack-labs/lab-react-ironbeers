import axios from 'axios';
import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';



class RandomBeer extends React.Component {
    state={
        randomBeer:``
    }
    componentDidMount(){
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((result) => {
        this.setState({randomBeer:result.data})
    })
    .catch((err) => {
        console.log(err);  
    });

    }
    render(){
      const beer = this.state.randomBeer
  return (
    <div className="random">
    {this.state.randomBeer.length === 0
    ? <div>Loading...</div> 
    : 
    <div>
        <Header />
        <img src={beer.image_url} alt={beer.name} />
        <div>
        <h1><span>{beer.name}</span><span>{beer.attenuation_level}</span></h1>
        <p><span>{beer.tagline}</span><span>{beer.first_brewed}</span></p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        </div>
    </div>
    }
    </div>
    )
  }
}

export default RandomBeer;
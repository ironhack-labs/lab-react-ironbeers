import React, { Component } from 'react'
// import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import Header from './../components/Header'


export class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          beer: null,
        };
      }
  

  componentDidMount() {
      
  
    apiHandler
      .getRandomBeer()
      .then((res) => {
console.log(res)
        this.setState({ beer: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
        this.props.match.params.beerId !== prevProps.match.params.beerId
      )
      apiHandler
      .getRandomBeer()
      .then((apiRes) => {
        this.setState({ beer: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

    render() {
        if (this.state.beer === null) return <div>Loading...</div>;
        return (
            <div>
            <div>
                <Header/>
            </div>
                <h1>Beer detail</h1>
                <img src={this.state.beer.image_url} alt="beer again"/>
                <h2>{this.state.beer.name}</h2>
                <p className="tagline">{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p> 
                <p className="desc">{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>     
           
                              



       
            </div>
        )
    }
}

export default RandomBeer

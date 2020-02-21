import React, { Component } from "react";
import axios from "axios"; //  npm i axios
import Header from './Partials/Header'
import {Link } from 'react-router-dom'
import BeerComponent from './BeerComponent'



export default class Beer extends Component {
  state = {
    beer: null,
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
  };

  componentDidMount() {
    axios
      .get(`${this.state.APIEndpoint}/${this.props.match.params.id}`)
      .then((apiRes) => {
        console.log(apiRes)
        this.setState({ beer: apiRes.data })
      } )
      .catch(apiErr => console.error(apiErr));
  }
  render() {
    console.log(this.state.beer)
    if(!this.state.beer) return <div>No beer found</div>
    return (

            <div>
                <Header></Header>
                <BeerComponent beer={this.state.beer} ></BeerComponent>
          
            </div>
      
    )
      }}

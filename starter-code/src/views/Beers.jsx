import React, { Component } from "react";
import axios from "axios"; //  npm i axios
import Header from './Partials/Header'
import {Link } from 'react-router-dom'



export default class Beers extends Component {
  state = {
    beers: [],
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
  };

  componentDidMount() {
    axios
      .get(this.state.APIEndpoint)
      .then((apiRes) => {
        console.log(apiRes)
        this.setState({ beers: apiRes.data })
      } )
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    return (
        this.state.beers.length ? (
            <div>
                <Header></Header>
              <h1 className="title">All the beers</h1>
              {this.state.beers.map((b, i) => (
                <div key={i}>
                    <img className="imgBeer" src={b.image_url} alt="oups"></img>
                    <h5>{b.name}</h5>
                    <p>{b.tagline}</p>
                    <Link to={`/beer/${b._id}`}>See more...</Link>
                    <p>Contributed by: {b.contributed_by}</p>
                    <hr></hr>
                </div>
              ))}
            </div>
          ) : (
            <p>no beers yet...</p>
          )
    )
      }}

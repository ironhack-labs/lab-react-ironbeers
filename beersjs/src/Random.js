import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import ExtendedBeer from "./ExtendedBeer";

export default class Random extends Component {

  state = {
    beer: []
  }

  componentDidMount(){
        axios
            .get(`http://localhost:5000/random`)
            .then(beer => {
                const oneBeer = beer.data

                this.setState({
                    ...this.state,
                    beer: oneBeer
                })
            })
  }

  render() {
    return (
      <div>
        <ExtendedBeer {...this.state.beer} />
      </div>
    )
  }
}
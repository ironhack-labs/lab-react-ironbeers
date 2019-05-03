import React, { Component } from 'react'
import ExtendedBeer from "./ExtendedBeer";
import axios from "axios"

export default class SingleBeer extends Component {

  state = {
    beer: []
  }

  componentDidMount(){
        axios
            .get(`http://localhost:5000/single/${this.props.match.params.id}`)
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
      <ExtendedBeer {...this.state.beer} />
    )
  }
}

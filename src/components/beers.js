import React, { Component } from "react";
import BeersService from "../services/beers.services";
// import { Container } from 'react-bootstrap'
// import CoasterService from "../../../services/coaster.service";
// import CoasterList from "./CoasterList";

class Beers extends Component {
  constructor() {
    super()

    this.state = {
      beers: []
    }

    this.service = new BeersService()
  }

  componentDidMount() {
    this.refreshBeers()
  }

  refreshBeers = () => {
    this.service.getAllBeers()
      .then(response => {
        const beers = response.data

        this.setState({ beers: beers })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
     <>
        <h1>Coaster List</h1>

        {this.state.beers.map( (beer, i) => <div key={i}>{beer.name}</div>)}

    </>
    )
  }
}

export default Beers
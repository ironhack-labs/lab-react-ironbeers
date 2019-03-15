import React, { Component } from "react";
import BeerDetail from "./BeerDetail";
import Header from './Header';
import { randomBeer } from "../services/BeersService";


class RandomBeer extends Component {

  state = {
    beer: {},
    error: false
  }

  componentDidMount = () => {
    randomBeer()       
        .then(response => {
          console.log(response)
          this.setState({ beer: response.data[0] })
         })
        .catch(err => this.setState({ error: true }))
  }

  render = () => (
    <div className="detailBeer">
      <Header />
      <BeerDetail {...this.state.beer}/>
    </div>
  )

}

export default RandomBeer;

import React, { Component } from "react";
import BeerDetail from "./BeerDetail";
import Header from './Header';
import { getBeer } from "../services/BeersService";

class SingleBeer extends Component {

  state = {
    beer: {},
    error: false
  }

  componentDidMount = () => {
    console.log("PROPS =>", this.props)
    getBeer(this.props.match.params.beerId)       
        .then(response => {
          //console.log(response)
          this.setState({ beer: response.data })
          console.log("LAS CERVEZA ESCOGIDA es ", this.state.beer)
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

export default SingleBeer;
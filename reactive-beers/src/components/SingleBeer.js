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
    getBeer(this.props.match.params.beerId)       
        .then(response => {
          this.setState({ beer: response.data })
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
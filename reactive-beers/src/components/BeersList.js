import React, { Component } from "react";
import BeerItem from "./BeerItem";
import { listBeers } from '../services/BeersService';
import Header from "./Header";

class BeersList extends Component {

  state = {
    beers: []
  }

  componentDidMount = () => {
    listBeers()
        //.then(response => this.setState({ beers: response.data }))        
        .then(response => {
          //console.log(response)
          this.setState({ beers: response.data })
          console.log("LAS CERVES SON ", this.state.beers[200])
          console.log(this.props)
        })
        .catch(err => this.setState({ error: true }))
  }
   
  render = () => {
    return (
      <div className="BeersList">
        <Header />
        {this.state.beers.map((beer) => <BeerItem key={beer._id} {...beer} />)}
      </div>
      
    )
  }
}

export default BeersList;
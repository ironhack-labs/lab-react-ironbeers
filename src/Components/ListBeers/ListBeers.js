import React, { Component } from 'react'
import BeerService from '../../services/beer.services'
import { Link } from "react-router-dom";


class ListBeers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []
    }
    this.service = new BeerService()
  }

componentDidMount() {
  this.service.getAllBeers()
    .then(response => {
      const beers = response.data

      this.setState({ beers: beers })
    })
    .catch(err => console.log(err))
}

  render() {

    return (
      <div>
         <h1>Todas las cervezas</h1>
          <Link to="/"><h1>Home</h1></Link>
          {this.state.beers?.map(elm=>
          <div><img src={elm.image_url} alt={elm.name}/> {elm.name} {elm.tagline} </div>)}
          
      </div>
    )
  }
}

export default ListBeers
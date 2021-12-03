import React, { Component } from 'react'
import BeerService from '../../services/beer.services'
import { Link } from "react-router-dom";


class SingleBeer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []
    }
    this.service = new BeerService()
  }

componentDidMount(id) {
  this.service.getOneBeer(id)
    .then(response => {
      const beers = response.data

      this.setState({ beers: beers })
    })
    .catch(err => console.log(err))
}

  render() {

    return (
      <div>
          
      <Link to="/"><h1>Home</h1></Link>

          {this.state.beers?.map(elm=>
          <div><img src={elm.image_url} alt={elm.name}/> {elm.name} {elm.tagline} </div>)}
          
      </div>
    )
  }
}

export default SingleBeer
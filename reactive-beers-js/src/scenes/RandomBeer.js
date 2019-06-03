import React from 'react'
import Header from '../components/Header'
import BeerService from '../services/BeerService'

class SingleBeer extends React.Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    BeerService.getRandom()
      .then(
        beer => {
          console.log(beer)
          this.setState({beer: beer})},
        error => console.error(error)
      )
  }

  render () {
    const beer = this.state.beer
    return (
      <div>
        <Header />
        <div>
          <img src={beer.image_url} alt=""></img>
          <div>
            <h2>{beer.name}</h2>
            <p>{beer.attenuation_level}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
          </div>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    )
  }
}

export default SingleBeer
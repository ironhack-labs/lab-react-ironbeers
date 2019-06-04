import React from 'react'
import Header from '../components/Header'
import BeerService from '../services/BeerService'

class SingleBeer extends React.Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    BeerService.getBeer(this.props.match.params.id)
      .then(
        beer => {
          this.setState({beer: beer})},
        error => console.error(error)
      )
  }

  render () {
    const beer = this.state.beer
    return (
      <div>
        <Header />
        <div className="single-beer-wrapper">
          <div className="single-beer-image-wrapper">
            <img src={beer.image_url} alt="" />
          </div>
          <div className="single-beer-title-wrapper">
            <h2 className="left-item-top">{beer.name}</h2>
            <p className="right-item-top">{beer.attenuation_level}</p>
            <p className="left-item-bot">{beer.tagline}</p>
            <p className="right-item-bot">{beer.first_brewed}</p>
          </div>
          <p className="single-beer-description">{beer.description}</p>
          <p className="single-beer-contributor">{beer.contributed_by}</p>
        </div>
      </div>
    )
  }
}

export default SingleBeer
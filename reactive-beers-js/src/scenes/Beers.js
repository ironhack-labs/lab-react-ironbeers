import React from 'react'
import Header from '../components/Header'
import BeerService from '../services/BeerSevice'
import { Link } from 'react-router-dom'

class Beers extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {
    BeerService.listBeers()
      .then(
        list => {
          console.log(list)
          this.setState({beers: list})},
        error => console.error(error)
      )
  }

  render() {
    const list = this.state.beers.map((beer,i) => {
      return (
        <Link key={i} to={`/beers/${beer._id}`}>
        <div className="beers-beer-wrapper">
          <div className="beers-image-section"><img src={beer.image_url} alt=""></img></div>
          <div className="beers-text-wrapper">
            <h2>{beer.name}</h2>
            <p className="p-tag">{beer.tagline}</p>
            <p><strong>Created by:</strong>{beer.contributed_by}</p>
          </div>
        </div>
        </Link>
      )
    })

    return (
      <div className="maximun-width">
        <Header />
        <div className="container">
          {list}
        </div>
      </div>
    )
  }
}

export default Beers
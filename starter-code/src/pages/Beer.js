import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import BEER_SERVICE from '../services/BeerList'
import { Link } from 'react-router-dom'

export class Beer extends Component {
  state = {
    beers: [],
  }

  async componentDidMount() {
    const { data } = await BEER_SERVICE.readAll()
    console.log(data)
    const beers = data.map((ele) => ({ ...ele, key: ele._id }))
    console.log(beers)
    this.setState({ beers })
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <NavBar />
        </div>
        {this.state.beers.map((ele) => (
          <div key={ele.key}>
            <img src={ele.image_url} alt="" />
            <h4>{ele.name}</h4>
            <p>{ele.description}</p>
            <p>{ele.tagline}</p>
            <p>{ele.contributed_by}</p>
            <Link to={`/beers/${ele._id}`}>View more</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Beer

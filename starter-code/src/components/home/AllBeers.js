import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../App.css'
import axios from 'axios'
import BeerCard from './BeerCard'
import Nav from './Nav'
import { Link } from 'react-router-dom'

class AllBeers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState({ beers: data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { beers } = this.state
    if (!beers) return <p>Loading...</p>
    return (
      <div>
        <Nav />
        {beers.map((beer, i) => (
          <Link to={`/beer/${beer._id}`}>
            <BeerCard key={i} beer={beer} />
          </Link>
        ))}
      </div>
    )
  }
}

export default AllBeers

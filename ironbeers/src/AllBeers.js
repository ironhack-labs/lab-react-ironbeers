import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllBeers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: null
    }
  }
  render() {
    if (!this.state.beers) 
      return <div>Loading...</div>
    
    return (
      <div>
        <h2>All Beers</h2>
        {this.state.beers.map(beer => <Link key={beer._id} to={"/beer-detail/"+beer._id} className="beer-card">
          <img src={beer.image_url} />
          <div>
            {beer.name}
          </div>
        </Link>)}
      </div>
    )
  }
  componentDidMount() {
    axios.get('https://ironbeerapi.herokuapp.com/beers/all')
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
  }
}

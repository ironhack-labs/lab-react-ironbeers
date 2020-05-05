import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ListBeers extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      beers: []
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/')
      .then(response => this.setState({ beers: response.data }))
      .catch(error => console.log(error))
  }

  handleSearch(event) {
    const { value } = event.target
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then(response => this.setState({ beers: response.data }))
      .catch(error => console.log(error))
  }
  

  render() {
    const { beers } = this.state
    return (
      <div className="beers">
        <input 
          type="text" 
          placeholder="Search" 
          onChange={this.handleSearch}
        />
        {beers.map(beer => (
          <div className="beers-card" key={beer._id}>
            <figure>
              <img src={beer.image_url} alt={beer.name} />
            </figure>
            <div className="info">
              <Link to={`/beers/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <p>{beer.tagline}</p>
              <small>Created By: {beer.contributed_by}</small>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ListBeers

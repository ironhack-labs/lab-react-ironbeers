import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class BeerList extends Component {
  state = {
    beers: []
  }

  getBeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
      .catch(err => console.log(err))
  }
  getSearch = (input) => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${input}`)
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
      .catch(err => console.log(err)
      )
  }
  
  handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.q.value
    input ? this.getSearch(input) : this.getBeers();
  }

  componentDidMount() {
    this.getBeers()
  }

  render() {
    const beers = this.state.beers.map(beer => {
      return (
        <div key={ beer._id } className="beer-card">
          <img src={ beer.image_url } alt={ beer.name } />
          <div className="txt">
            <Link to={ `/beers/${beer._id}` }><h2>{ beer.name }</h2></Link>
            <h3>{ beer.tagline }</h3>
            <p><strong>Created by: </strong>{ beer.name }</p>
          </div>
        </div>
      )
    });

    if (!beers) return <h1>Loading ...</h1>;
    return (
      <div className="beer-container">
        <form onSubmit={ this.handleSearch }>
          <input type="text" name="q" placeholder="search for beers" />
          <button>search</button>
        </form>
        {beers }
      </div>
    )
  }
}

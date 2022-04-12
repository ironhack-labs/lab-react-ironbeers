import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import Beer from '../components/Beer'

import './Beers.css'

class Beers extends Component {
  
  state = {
    beers: [],
    searchBar: "",
    loading: true
  }

  onChange = (event) => {
    const { name, value } = event.target
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then( ( resFromApi ) => {
        this.setState({
          ...this.state,
          beers: resFromApi.data,
          [ name ]: value
        })
      })
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then( ( resFromApi ) => {
        this.setState({
          ...this.state,
          beers: resFromApi.data,
          loading: false 
        })
      })
  }

  render () {
    const listOfBeers = this.state.beers.map( (beer) => {
      return <NavLink className='link' to={ `/beers/${ beer._id }` } key={ beer._id } >
        <Beer  { ...beer } />
      </NavLink>
    })

    return (
      <>
        <input type="text" name="searchBar" placeholder='Search Bar' value={ this.state.searchBar } onChange={ this.onChange }  />
        { !this.state.loading ? listOfBeers : <h2>Loading...</h2> }
      </>
    )
  }
}

export default Beers
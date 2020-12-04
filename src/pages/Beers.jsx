import React, { Component } from 'react'
import Header from '../components/Header';
import BeerCard from '../components/BeerCard';
import axios from 'axios';

export default class Beers extends Component {
  state = {
    beers: [],
    search: '',
    loading: true
  }

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        this.setState({
          beers: res.data,
          loading: false
        })
    })
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name; 

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then(res => {
        this.setState({
          beers: res.data,
          [name]: value
        })
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Header />
          <h2>Loading...</h2>
        </div>
      )
    }

    return (
      <div>
        <Header />

        <h1>BEERS</h1>

        <div className='search-bar'>
          <input 
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
            type='text' 
            placeholder='Search beer...' 
          />
        </div>

        <div className='all-beers'>
          {this.state.beers.map(el => (
            <BeerCard beer={el} key={el._id} />
          ))}
        </div>

      </div>
    )
  }
}
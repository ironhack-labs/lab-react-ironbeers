import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import Axios from 'axios'
import BeerCard from '../components/Beer/BeerCard'
import CardLoader from '../components/Loaders/CardLoader'

export default class Search extends Component {
  state = {
    query: undefined,
    beers: undefined,
    isLoading: false
  }

  searchBeer = async e => {
    this.setState({ isLoading: true, query: e.target.value })
    const response = await Axios.get(`https://ih-beer-api.herokuapp.com/beers/search?q=${this.state.query}`)
    this.setState({
      beers: response.data,
      isLoading: false
    })
  }

  render() {
    const { beers, isLoading } = this.state
    return (
      <Layout>
        <h1 className='h4'>Search</h1>
        <div className='form-group mt-4'>
          <input
            type='search'
            name='search'
            placeholder='Type to search...'
            className='form-control'
            onInput={this.searchBeer}
          />
        </div>
        {isLoading && <CardLoader />}
        <div className='row'>{beers && beers.map(beer => <BeerCard key={beer._id} beer={beer} />)}</div>
      </Layout>
    )
  }
}

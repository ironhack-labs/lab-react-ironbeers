import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import BeerCard from '../components/Beer/BeerCard'
import CardLoader from '../components/Loaders/CardLoader'

export default class Home extends Component {
  state = {}

  getBeers = async () => {
    const url = `https://ih-beer-api.herokuapp.com/beers`
    const response = await axios.get(url)
    this.setState({
      beers: response.data
    })
  }

  componentDidMount() {
    this.getBeers()
  }

  render() {
    const { beers } = this.state
    return (
      <Layout>
        <div className='row'>
          {beers ? (
            beers.map(beer => <BeerCard key={beer._id} beer={beer} />)
          ) : (
            <>
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </>
          )}
        </div>
      </Layout>
    )
  }
}

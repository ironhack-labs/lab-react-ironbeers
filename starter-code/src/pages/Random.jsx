import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import BeerInfo from '../components/Beer/BeerInfo'
import CardLoader from '../components/Loaders/CardLoader'
import axios from 'axios'

export default class Random extends Component {
  state = {
    loading: true
  }

  getRandomBeer = async () => {
    this.setState({
      loading: true
    })
    const url = `https://ih-beer-api.herokuapp.com/beers/random`
    const response = await axios.get(url)
    this.setState({
      beer: response.data,
      loading: false
    })
  }

  componentDidMount() {
    this.getRandomBeer()
  }

  render() {
    const { beer, loading } = this.state
    return (
      <Layout>
        <div className='row'>{loading ? <CardLoader /> : <BeerInfo beer={beer} />}</div>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <button className='btn btn-info' onClick={() => this.getRandomBeer()}>
              Get other beer
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

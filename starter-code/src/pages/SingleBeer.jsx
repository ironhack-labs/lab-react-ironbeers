import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/Layout/Layout'
import CardLoader from '../components/Loaders/CardLoader'
import BeerInfo from '../components/Beer/BeerInfo'

export default class SingleBeer extends Component {
  state = {}

  getBeer = async () => {
    const url = `https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`
    const response = await axios.get(url)
    this.setState({
      beer: response.data
    })
  }

  componentDidMount() {
    this.getBeer()
  }

  render() {
    const { beer } = this.state

    return (
      <Layout>
        <div className='row'>{beer ? <BeerInfo beer={beer} /> : <CardLoader />}</div>
      </Layout>
    )
  }
}

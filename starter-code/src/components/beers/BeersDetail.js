import React, { Component } from 'react'
import Card from '../styled-components/Card'
import axios from 'axios'
import Row from '../styled-components/Row'


const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers/'

class BeersDetail extends Component {
  state = {}
  
  async componentDidMount() {
    const { id } = this.props.match.params
    const { data } = await axios.get(`${ENDPOINT}${id}`)
    this.setState({ beer: { ...data } })
  }
  render() {
    const { beer } = this.state
    if (!beer) {
      return (
        <div className="App">
        
        </div>
        )
      }
      console.log(beer)
    return (
      <div className="App">
        <Card>
          <Row>
            <img src={beer.image_url} alt={beer.name} width="100px" />
          </Row>
          <Row label={beer.name}></Row>
          <Row label={beer.tagline}></Row>
          <Row label={beer.description}></Row>
        </Card>
      </div>
    )
  }
}

export default BeersDetail

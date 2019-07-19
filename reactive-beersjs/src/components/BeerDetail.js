import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header';
export default class BeerDetail extends Component {

  state = {
    beer: {}
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
      .then(({ data }) => {
        this.setState({ beer: data })
      })
      .catch(err => console.log(err))
  }
  render() {
    const { beer } = this.state
    return (
      <div>
        <Header />
        <div className="beer-detail">
          <img src={beer.image_url} alt={beer.name} />
          <div className="beer-detail-name">
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
            </div>
            <div>
              <small> <b>{beer.first_brewed}</b> </small>
              <small> {beer.attenuation_level} </small>
            </div>
          </div>
          <p> {beer.description} </p>
          <small> {beer.contributed_by} </small>
        </div>
      </div>
    )
  }
}

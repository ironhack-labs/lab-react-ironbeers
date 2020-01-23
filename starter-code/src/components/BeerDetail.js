import React from 'react'
import Navbar from './Navbar'
import {detail} from '../services/BeerService'

class BeerDetail extends React.Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    detail(this.props.match.params.id)
      .then(beer => this.setState({beer}))
  }

  render() {
    return (
      <div className="BeerDetail">
          <Navbar/>
          <img alt="" src={this.state.beer.image_url} width="50px"></img>
          <div>
            <h3>{this.state.beer.name}</h3>
            <p>{this.state.beer.tagline}</p>
            <p><b>Created by: </b>{this.state.beer.contributed_by}</p>
          </div>
      </div>
    )
  }
}

export default BeerDetail

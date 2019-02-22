import React, { Component } from 'react'
import Header from '../Header'
import api from '../../api'

export class BeerDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
        beer : ''
    }
  }
  render() {
    return (
    <div>
      <Header />
      <div className="beer_detail_container">
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <div className="wrapper">
        <div className="beer_detail_text_left">
        <h3>{this.state.beer.name}</h3>
        <h4>{this.state.beer.tagline}</h4>
        </div>
        <div className="beer_detail_text_right">
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>     
        </div>
        </div>
        <p>{this.state.beer.description}</p>
        <p><strong>Contributed by: </strong>{this.state.beer.contributed_by}</p>
      </div>
    </div>
    )
  }
  componentDidMount() {
    api.getBeerDetail(this.props.match.params.id).then(beers => {
      this.setState({
        beer: beers
      });
      console.log("TCL: Home -> componentDidMount -> beers", beers);
    });
  }
}

export default BeerDetail

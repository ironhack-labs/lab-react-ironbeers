import React, {Component } from 'react';
import axios from "axios";
import Nav from '../components/Nav';
import './BeerDetail.css'

class BeerDetail extends Component {
  constructor(props){
    super(props)

    this.state = {
      beer: null
    }
  }
  componentDidMount(){
    axios.get(`http://ih-beers-api.herokuapp.com/beers/${this.props.match.params.beerId}`)
    .then((response)=> {
      this.setState({
        beer: response.data
      })
    })
    .catch((err)=> {

    })
  }
  render(){
    return (
      <div className="beerDetail">
        <div className="beerDetail-header">
          <Nav />
        </div>
        <div className="beerDetail-card">
          {!this.state.beer && <h1>loading...</h1>}
          {this.state.beer && (
            <img classname="beerDetail-image" src={this.state.beer.image_url} alt="beer" />
          )}
          {this.state.beer && <h1>{this.state.beer.name}</h1>}
          {this.state.beer && <h4>{this.state.beer.tagline}</h4>}
          {this.state.beer && <p>{this.state.beer.first_brewed}</p>}
          {this.state.beer && <p>{this.state.beer.attenuation_level}</p>}
          {this.state.beer && <p>{this.state.beer.description}</p>}
          {this.state.beer && <p>{this.state.beer.contributed_by}</p>}
        </div>
      </div>
    );
  }
}

export default BeerDetail;

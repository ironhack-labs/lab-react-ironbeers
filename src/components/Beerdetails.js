import React, { Component } from 'react'
import axios from "axios";
import Nav from "./Nav";

export default class Beerdetails extends Component {



  state = {
    beer: []
  }

  componentDidMount() {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(beer => {
        console.log(beer.data);
        this.setState({
          beer: beer.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  /*beer = this.state.beer.map((thebeer,i)=> {
    return thebeer.find( k => k.id == this.props.match.params.id )
  })*/




  render() {
    return (
      <div>
      <Nav />
      <div className="beerslice">
          <img className="beerimg" src={this.state.beer.image_url} />
          
            <h3>{this.state.beer.name}</h3>

          <h4>{this.state.beer.tagline}</h4>
          <p>{this.state.beer.description}</p>
          <p>First Brewed: {this.state.beer.first_brewed}</p>
          <p>Attenuation Level: {this.state.beer.attenuation_level}</p>
          <p>Contributed by: {this.state.beer.contributed_by}</p>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'
import './Beer.css'


export default class Beer extends Component {
  constructor() {
    super();
    this.state = { beer: null };
  }

  getBeer() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ ...this.state, beer: res.data });
      })
      .catch((err) => {
        console.log(err)
      })

  }

  getRandomBeer(){
    axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(res => {
        console.log(res);
        this.setState({ ...this.state, beer: res.data[0]});
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    if (this.props.match.params.id){
    this.getBeer();
    }
    else{
      this.getRandomBeer();
    }
  }
  render() {
    return (this.state.beer ? (
      <div className="single-beer">
        <img src={this.state.beer.image_url} />
        <h1>{this.state.beer.name}</h1>
        <h2>{this.state.beer.tagline}</h2>
        <p>First brewed:{this.state.beer.first_brewed}</p>
        <p>Attenuation level: {this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>Contributed by: {this.state.beer.contributed_by}</p>
      </div>) 
      : (<p>Loading...</p>))

  }
}

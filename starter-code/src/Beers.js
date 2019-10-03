import React, { Component } from 'react'
import Nav from './Nav'
import axios from "axios";
import { Link } from 'react-router-dom'

export default class Beers extends Component {
  constructor(){
    super();

    this.state ={
      beers: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/all").then(allbeersFromBack => {
      this.setState({
        ...this.state,
        beers: allbeersFromBack.data
      })
    })
  }

  render() {
    return (
      <div>
          <Nav></Nav>
          <div>
            {this.state.beers.map((beer, idx) => {
              return <div key={idx}>
                <img src={beer.image_url} alt={beer.name} />
                <Link to={`/beers/${beer._id}` }><p>Name: {beer.name}</p></Link>
                <p>Tagline: {beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
                </div>
            })}
          </div>
      </div>
    )
  }
}

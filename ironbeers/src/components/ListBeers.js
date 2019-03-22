import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class ListBeers extends Component {


    constructor(){
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(response => {
            // console.log(response)
            this.setState({beers: response.data})
        })
    }
  render() {
    return (
      <div>
            {this.state.beers.map(beer => (
                <div key={beer._id}>
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                    <Link to={`/beer/${beer._id}`} ><img src= {beer.image_url} alt="beers" /></Link>
                </div>
            ))}

      </div>
    )
  }
}

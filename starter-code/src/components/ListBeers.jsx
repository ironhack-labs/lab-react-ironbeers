import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerCard from './BeerCard'
import axios from 'axios'

export default class ListBeers extends Component {

  state= {
    beers: []
  }

  componentDidMount() {
axios
.get('https://ih-beer-api.herokuapp.com/beers')
.then (({ data }) => {
  this.setState({ beers: data})
})
.catch((error)=> {})
  }

  render() {
    return (
      <div>
      <div className="container">
        <div className="card text-center">
          <div className="card-body">
            <p>
            <Link to="/">
                    Home
                    </Link>
            </p>
          </div>
      </div>
   </div>
   <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>

       {this.state.beers.map((beer,index) => (
         <li key={index} className="beercard" >
            <BeerCard key={index} {...beer} />
         </li>
       ))}

   </div>
   </div>
    )
  }
}

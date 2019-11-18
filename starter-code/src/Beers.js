import React, { Component } from 'react'
import axios from 'axios'
import './Beers.css'
import {Link} from 'react-router-dom'

export default class Beers extends Component {

    state = {
        allTheBeers: []
    }

componentDidMount(){
    this.getAllBeers()
}

getAllBeers = () => {
    axios.get('https://ih-beers-api.herokuapp.com/beers').then(allTheBeers =>{
      console.log(allTheBeers)
      this.setState({
          allTheBeers: allTheBeers.data
      })
    })
  }

showTheBeers = () => {
   return  this.state.allTheBeers.map(eachBeer => {
       return (
           <Link to={`/beer-detail/${eachBeer._id}`} className='beerList'>
           <li className='beerInfo'>
          
            <h2>{eachBeer.name}</h2>
            <img src={eachBeer.image_url}  width="40px" height="90px" />
            <p>{eachBeer.description}</p>
           </li>
           </Link>
       )
   })
}

    render() {
        return (
            <div className='beers'>
               <h1>IronBeers</h1> 
                {this.showTheBeers()}
            </div>
        )
    }
}

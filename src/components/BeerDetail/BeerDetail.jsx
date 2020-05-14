import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import BeerListFetch from '../BeerApi'

export default class RandomBeer extends Component {

    constructor(){
        super()
        this.state = {
            beer: []
        }      
    }

    componentDidMount() {
BeerListFetch.getBeerDetails(this.props.match.params.id)
.then(data => {    
    this.setState({beer:data.data})
    })
.catch(err => console.log(err))
}
    
render() {  
const {beer} = this.state
        
 return (
        <div>
        
         <div className="single-beer"><p></p>
          <img src={beer.image_url} style={{width:140}} alt={beer.name}></img>
         </div>
         <div>
          <h1>{beer.name}</h1>
          <p>{beer.tagline} </p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
         </div>
    
         <div><Link to='/beers'>Back to alle beers</Link></div>
        </div>
    )
}}
import React, { Component } from 'react'
import axios from 'axios' 
import NavBar from './NavBar'

export default class BeerDetail extends Component {
   state ={
        beer: {}
   }

   componentDidMount(){
    const { id } = this.props.match.params
    axios
    .get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
    .then(({data})=>{
        this.setState({beer: data})
    })
    .catch(err =>{
        console.log(err)
    })
   }

   
   
    render() {
    const {beer} = this.state
   
        return (
            <div>
                <NavBar/>
                    <img src= {beer.image_url} alt= 'beerImage'/>                    
                    <h1>{beer.name}</h1>
                    <p>{beer.description}</p>
                    <p>{beer.tagline}</p>
                    <small>{beer.first_brewed}</small>
                    <p>{beer.attenuation_level}</p>
                    <small>{beer.contributed_by}</small>  
            </div>
        )
    }
}


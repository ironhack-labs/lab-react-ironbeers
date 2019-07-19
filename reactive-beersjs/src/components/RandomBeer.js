import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

export default class RandomBeer extends Component {
   state ={

    RandomBeer : {}
   } 
    
   componentDidMount(){
    axios
    .get('https://ih-beer-api.herokuapp.com/beers/random')
   
    .then(({data})=>{
            this.setState({RandomBeer: data})
        })
    .catch(err=>{
        console.log(err)
    })
   }


    render() {
       const { RandomBeer} = this.state
       console.log(RandomBeer)
        return (
            <div>
                <NavBar/>
                <img src= {RandomBeer.image_url} alt= 'beerImage'/>                    
                <h1>{RandomBeer.name}</h1>
                <p>{RandomBeer.description}</p>
                <p>{RandomBeer.tagline}</p>
                <small>{RandomBeer.first_brewed}</small>
                <p>{RandomBeer.attenuation_level}</p>
                <small>{RandomBeer.contributed_by}</small>  
        
        </div>
        )
    }
}

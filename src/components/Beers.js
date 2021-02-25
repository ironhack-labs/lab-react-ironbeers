import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import './Beer.css'

class Beers extends Component{
    constructor(){
        super()
        this.state={
            beers:[]
        }
    }

componentDidMount=()=>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=>{
        console.log(response.data)
        const beers = response.data
        this.setState({beers:response.data})})
        .catch((err)=>console.log(err))
}

render(){
    return(
       
<div className="container">
    {this.state.beers.map((beer)=>{
  console.log(beer)
        return (
            <div className="container"key={beer._id}>
              <img className="beer-img"src={beer.image_url} alt="elm"/>
              <h3 className="beer-name">{beer.name}</h3>
              <p className="beer-line">{beer.tagline}</p>
              <p> {beer.contributed_by}</p>
            </div>
        )
})}
</div>
)}
}
export default Beers

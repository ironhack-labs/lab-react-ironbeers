import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import NavBar from '../Components/NavBar'

const BeerApi = 'https://ih-beers-api2.herokuapp.com/beers'

export default class Beers extends Component{

    state = {
        beers: []
    }
    
    componentDidMount(){
        axios.get(BeerApi)
       .then(res => {
           this.setState({
               beers: res.data
           })
       })
       .catch(error => {
           console.log(error)
       })
    }

    render(){

    return (
        <div>
        <NavBar />
        {this.state.beers.map(beer => {
            return  ( 
                <div key={beer._id}>
                <img src={beer.image_url}  alt='beer' style={{
                    width: '100px',
                    margin: '15px'
                }}/>
                <Link to={`/beers/${beer._id}`}>
                <p><strong>{beer.name}</strong></p>
                </Link>
                <p>{beer.description}</p>
            </div> 
            )}
        )}
        </div>
    )
}
}



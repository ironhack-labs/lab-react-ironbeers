import React, { Component } from 'react'
import Navbar from './Navbar'
// import { Link } from 'react-router-dom'
import axios from 'axios'

class ListBeers extends Component {
    constructor() {
        super()
        this.state = {
        beers: []
        }
    }

    componentDidMount() {
       axios.get('https://ih-beers-api2.herokuapp.com/beers')
       .then(response => {
           this.setState({
               ...this.state,
               beers: response.data
           })
       })
    }
    render() {
        console.log(this.state.beers)
        return (
        <>
    <Navbar />
            {this.state.beers.map(oneBeer => (
    <div className="beer">
                <img src={oneBeer.image_url} alt="Beer image"/>
                <h1>{oneBeer.name}</h1>
               <p>{oneBeer.tagline}</p>
               <p>{oneBeer.contributed_by}</p>
    </div>
            ))}
        </>
    )
    }
}

export default ListBeers




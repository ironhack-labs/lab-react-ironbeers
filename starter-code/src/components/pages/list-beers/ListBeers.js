import React, { Component } from 'react'
import Header from '../header/Header.js'

import axios from 'axios'
import { Link } from 'react-router-dom'

class ListBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }
    componentDidMount() {
       axios.get('https://ih-beers-api2.herokuapp.com/beers')
       .then(response =>{
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
            <Header />
                {this.state.beers.map((elm)=> (
                <div className="" key={elm}>
                     <img src={elm.image_url} alt="Beer image"/>
                <h1>{elm.name}</h1>
                <p>{elm.tagline}</p>
                <p>{elm.contributed_by}</p>
                </div>
                ))}
        </>
    )
    }
}
export default ListBeers

import React from 'react';
import { Component } from 'react'
import './SingleBeer.css'
import BeersService from '../../../service/beers.service'

class SingleBeer extends Component {
    
    constructor () {
        super()
        this.state = {
            beer: ''
        }
        
        this.beersService = new BeersService()
    }
    
    componentDidMount () {
        this.loadBeer()
    }
    
    loadBeer () {
        
        this.beersService
            .getBeer()
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }


    render () {
        return (
            <h1>detalles</h1>
        )
    }
}

export default SingleBeer
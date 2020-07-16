import React, { Component } from 'react'
import BeerService from '../service/BeersService'


//import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            beerList: []
        }
        this.beerService = new BeerService()
    }

  
    render() {

        return (

            <>
            <hi>Hola</hi>
            </>
               
        )
    }
}

export default Home

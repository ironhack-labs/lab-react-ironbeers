import React, { Component } from 'react'
import axios from 'axios'


// Aquí irían los servicios. 
// Me hubiera gustado hacerlo con el método axios.create para crear el método una vez instanciada la clase, pero no encuentro ningún sitio donde hagan el axios.create como lo hace Germán
class ApiServices extends Component {

    constructor() {
        super()
        this.apiCall = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }


    // getAllBeers = () => axios.get('https://ih-beers-api2.herokuapp.com/beers')
    
    // getBeer = id => axios.get(`https://ih-beers-api2.herokuapp.com/${id}`)
    
    // getRandomBeer = () => axios.get('https://ih-beers-api2.herokuapp.com/random')
    
    // createBeer = (beer) => axios.post('https://ih-beers-api2.herokuapp.com/new', beer)
    
    // searchBeers = (query) => axios.get(`https://ih-beers-api2.herokuapp.com/search?q=${query}`)
    
    getAllBeers = () => this.apiCall.get('/')
}

export default ApiServices
import React, { Component } from 'react'
import axios from 'axios'


export default class Services extends Component {

    constructor(){

        super()
        this.state = {

        }
        
        
    }
    
    componentDidMount() {
        this.beersApi = axios.create({
        baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
            })
        }

    getAllBeers = () => {

        axios.get ('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.data)
            .catch(err => console.log(err))

    }

    render () {

        return (
            <>


            </>
        )

    }

}
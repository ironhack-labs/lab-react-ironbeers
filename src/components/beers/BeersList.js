import React, { Component } from 'react'
import BeersService from '../../service/BeersService'

import BeersCard from './BeersCard'

import Row from 'react-bootstrap/Row'

class Beers extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
         this.beersService = new BeersService()
    }

    componentDidMount = () => this.updateBeers()

    updateBeers = () => {
        this.beersService
            .getAllBeers()
            .then(response => {
                this.setState({ beers: response.data })
            } )
            .catch(err => console.log(err))
    }


    render() {
console.log(this.state.beers)
        return (
            <>
            
                <Row>
                    {this.state.beers.map(elm =>  <BeersCard key={elm._id} {...elm}/>)}
                </Row>

            </>

        )
    }
}

export default Beers
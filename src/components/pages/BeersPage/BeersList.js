import { Component } from 'react'
import BeersService from './../../../services/beers.services'

import BeerCard from './BeerCard'



class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            modal: false
        }
        this.beersService = new BeersService()
    }


    loadBeers = () => {
        this.beersService
            .getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadBeers()
    }


    render() {

        return (

            !this.state.beers
                ?
                <h3>CARGANDO...</h3>
                :
                (<>
                    <br />


                    {this.state.beers.map((elm, index) => <BeerCard key={index} {...elm} />)}



                </>
                )
        )
    }
}

export default BeersList
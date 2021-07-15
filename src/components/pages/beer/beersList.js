import React, { Component } from 'react';
import BeersService from './../../services/beer.services'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,

        }
        this.beersService = new BeersService()
        // console.log(this.beersService)
    }

    loadBeers = () => {
        this.beersService
            .getBeerList()
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
                    <Row>
                        {this.state.beers.map(elm =>
                            <div key={elm._id}>
                                <Link to={`/beers/${elm._id}`}>
                                    <div>
                                        <img src={elm.image_url} />
                                        <h1>{elm.name}</h1>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </Row>
                </>
                )
        )
    }
}

export default BeersList



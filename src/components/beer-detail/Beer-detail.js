import React, { Component } from 'react'
import BeersService from './../../service/beers.service'
import BeerCard from '../beer-card/beer-card'

export default class BeerDetail extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService()

    }

    componentDidMount = () => {

        const beerId = this.props.match.params.id
        this.beersService
            .getBeerDetails(beerId)
            .then(res => {
                console.log(res.data.id)
                this.setState({ beer: [res.data] })
            })
            .catch(err => console.log(err))

    }

    render() {

        return (

            <>
                <h1>Detalles</h1>
                { this.state.beer ?
                    this.state.beer.map(elm => <BeerCard key={elm._id} name={elm.name} tagline={elm.tagline} img={elm.image_url} id={elm._id} />)
                    :
                    null
                }
            </>
        )
    }


}
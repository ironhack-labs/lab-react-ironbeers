import React, { Component } from 'react'
import BeersService from './../../service/beers.service'
import BeerCard from '../beer-card/beer-card'

export default class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService
    }
    componentDidMount = () => {

        this.beersService
            .getRandomBeer()
            .then(res => this.setState({
                beer: [res.data]
            }))
    }

    render() {

        return (
            <>

                <h3>Random Beer</h3>

                {
                    this.state.beer ?
                        this.state.beer.map(elm => <BeerCard key={elm._id} name={elm.name} tagline={elm.tagline} img={elm.image_url} id={elm._id} />)
                        :
                        null}
            </>
        )
    }

}
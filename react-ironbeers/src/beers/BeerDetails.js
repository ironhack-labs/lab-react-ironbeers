import React, { Component, Fragment } from 'react'
import beerService from '../beers/service/beers.service'
import NavBar from '../header/NavBar'
import { Link } from 'react-router-dom'



export default class extends Component {
    constructor() {
        super()
        this.state = {
            beer: []
        }

        this.beerService = new beerService()
    }

    componentDidMount = () => this.loadBeer()

    loadBeer = () => {
        this.beerService
            .getBeerId(this.props.match.params.id)
            .then(data => this.setState({ beer: data.data }))
    }


    render() {
        const { name, image_url, tagline, contributed_by, _id } = this.state.beer

        return (
            <Fragment>
                <NavBar />
                <div className="card flex-row ">
                    <div>
                        <img style={{ width: '90%' }} src={image_url} alt={name} />
                    </div>
                    <div className="card-block"> <h5 className="card-title">{name}</h5>
                        <p className="text-muted">{tagline}</p>
                        <p>Created by: {contributed_by}</p>
                    </div>

                </div>

            </Fragment>
        )
    }
}
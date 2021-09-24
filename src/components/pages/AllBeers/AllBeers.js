import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BeersService from '../../../services/beers.service';

export default class AllBeers extends Component {

    constructor() {
        super()

        this.state = {
            beers: null,
        }
        this.beersService = new BeersService();
    }


    componentDidMount() {
        this.refreshBeers()
    }


    refreshBeers = () => {
        this.beersService.getBeers()
            .then(response => {
                this.setState({
                    ...this.state,
                    beers: response.data
                })
            })
            .catch(err => console.log(err))
    }


    displayBeers = () => {
        return this.state.beers.map((beer) => {

            return (
                <Link to={`/beers/${beer._id}`} key={beer._id}  className="col-md-12 mt-2 text-decoration-none text-dark">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-3">
                                <img src={beer.image_url} alt="" height="150px" />
                            </div>
                            <div className="col">
                                <h1>{beer.name}</h1>
                                <h3 className="text-secondary">{beer.tagline}</h3>
                                <small>Created by: {beer.contributed_by}</small>
                            </div>
                        </div>
                        <hr />
                </Link>
            )

        })
    }


    render() {
        return (
            this.state.beers ?
                <div className="container">
                    <div className="row justify-content-center">
                        {this.displayBeers()}
                    </div>
                </div>
                :
                <div className="row justify-content-center">

                    <Spinner animation="grow" />
                </div>
        )
    }
}

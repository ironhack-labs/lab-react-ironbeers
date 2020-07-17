import React, { Component } from 'react'
import BeerService from '../../../service/BeerService'
import { Link } from 'react-router-dom'

class AllBeers extends Component {

        constructor(){
            super()
            this.state = {
                beers: ""
            }
            this.BeerService = new BeerService()
        }

        componentDidMount() {
            this.BeerService
                .getAllBeers()
                .then(response => this.setState({ beers: response.data }))
                .catch(err => next(new Error(err)))
        }

    render() {


        return (
            <>
                <Header />
                <h2>List of beers</h2>
                <br/>
                {this.state.beers.map((elm) => (
                    <div key = {elm._id}>
                        <img src = {elm.image_url} />
                        <Link><h3>{elm.name}</h3></Link>
                        <p>{elm.tagline}</p>
                        <small>{elm.contributed_by}</small>
                    </div>
                ))}
            </>
        );
    }
}

export default AllBeers;
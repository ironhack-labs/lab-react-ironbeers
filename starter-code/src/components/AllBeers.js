import React, { Component } from 'react'
import Service from '../service/beer.service'
import { Link } from "react-router-dom"
// import { Container, Row } from 'bootstrap/dist/css/bootstrap.min.css'

class AllBeers extends Component {
    constructor() {
        super()
        this._service = new Service()
        this.state = {
            beers: [],
        }
    }

    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this._service.getAllBeers()
            .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    render() {
        return (
            <section>
                <h1>All the beers</h1>
                <div>

                    {this.state.beers.map((elm) => (

                        <div>
                            <img src={elm.image_url} alt={elm.name} />
                            <h3>{elm.name}</h3>
                            <h5>{elm.tagline}</h5>
                            <p>Created by: <small>{elm.contributed_by}</small></p>
                            <Link to={`/OneBeer/${elm._id}`}>View details</Link>
                            {/* {this.state.beers.map(beer => <BeerCard key={beer._id} {...beer} />)} */}
                        </div>
                    ))}
                </div>
            </section >
        )
    }
}

export default AllBeers
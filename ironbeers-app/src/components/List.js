import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar'

import './List.css'

class List extends Component {

    constructor() {
        super()
        this.state = {
            allBeers: []
        }
    }

    componentDidMount() {
        const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ allBeers: data }))
    }

    render() {
        return (
            <>
                <Navbar />

                {this.state.allBeers.map(elm =>
                    <>
                        <img className="beer-img" src={elm.image_url} alt={elm.name} />
                        <h4>{elm.name}</h4>
                        <h5>{elm.tagline}</h5>
                        <p>Created by: {elm.contributed_by}</p>
                        <Link to={`/beers/${elm._id}`}>View details</Link>
                        <hr></hr>
                    </>

                )}
            </>


        )
    }
}

export default List
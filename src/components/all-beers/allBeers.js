import React, { Component } from 'react'
import BeerService from '../../service/beerService'

import './allBeers.css'



class BeerList extends Component {
    constructor(){
        super()
        this.state = {
            beers: ""
        }
        this.beerService = new BeerService()
    }

    componentDidMount() {
        this.beerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return(

            <div>
                {!this.state.beers ? <h3>CARGANDO...</h3> :

                    <div className = "container">
                        <div className = "row">
                            <div className = "col-4">
                                {this.state.beers.map((elm) => (
                                    <div key = {elm._id}>
                                        <img className = "imagen" src = {elm.image_url} alt = {elm.name}/>
                                        <h2>{elm.name}</h2>
                                        <p>{elm.tagline}</p>
                                        <p>Created by: {elm.contributed_by}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </div>

        )
    }
}


export default BeerList
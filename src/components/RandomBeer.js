import { Component } from 'react'
import BeersService from './../services/beers-service'

import React from 'react'
class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined
        }
        this.BeersService = new BeersService()
    }


    componentDidMount() {



        this.BeersService
            .getRandomBeer()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <>

                {!this.state.beers
                    ?
                    <h3>Cargando</h3>
                    :
                    <article>
                        <div>
                            <img src={this.state.beers.image_url}></img>
                            <p>{this.state.beers.name}</p>

                            <hr></hr>

                            <p>{this.state.beers.tagline}</p>
                            <p>{this.state.beers.first_brewed}</p>
                            <p>{this.state.beers.attenuation_level}</p>
                            <p>{this.state.beers.description}</p>
                            <p>{this.state.beers.contributed_by}</p>
                            <hr></hr>



                        </div>
                    </article>
                }

            </>
        )
    }
}


export default RandomBeer
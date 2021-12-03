import React, { Component } from 'react'

import Navbar from './Navbar'
import BeerApi from './services/BeerApi'


export default class SingleBeer extends Component {

    constructor() {
        super()



        this.state = {
            image_url: "",
            name: "",
            tagline: "",
            first_brewed: "",
            attenuation_level: "",
            description: "",
            contributed_by: ""
        }

        this.service = new BeerApi()
    }

    componentDidMount() {
        const  id  = this.props.match.params.id
        
        console.log(this.props.beer)
        this.service.getOneBeer(id)
            .then(foundBeer => {
                console.log(foundBeer)
                const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = foundBeer.data

                this.setState(
                    {
                        image_url,
                        name,
                        tagline,
                        first_brewed,
                        attenuation_level,
                        description,
                        contributed_by
                    }
                )
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-12 card text-center">
                        <img src={this.state.image_url} className="card-img-top justify-center" alt={this.state.name} />
                        <div className="card-body">
                            <h1 className="card-title">{this.state.name}</h1>
                            <p className="card-text text-muted">{this.state.tagline}</p>
                            <p className="card-text">{this.state.first_brewed}</p>
                            <p className="card-text">{this.state.attenuation_level}</p>
                            <p className="card-text">{this.state.description}</p>
                            <p className="card-text">{this.state.contributed_by}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

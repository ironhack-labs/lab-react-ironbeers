import React, { Component } from 'react'
import BeerService from '../service/beer-service'
import { Link } from 'react-router-dom'



class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { beer: {} }
        this.services = new BeerService()
    }


    componentDidMount() {

        this.services.getOneBeer(this.props.match.params.id)
            .then(beer => this.setState({ beer: beer }))
    }

    render() {
        return (
            <div className="container coaster-detail">

                <h1>{this.state.beer.name}</h1>

                <div className="row">

                    <div className="col-md-8">
                        <img src={this.state.beer.image_url} alt={this.state.beer.name}></img>
                    </div>
                    <div className="col-md-4">
                        <h5>Descripción</h5>
                        <p>{this.state.beer.description}</p>

                        <Link to={'/beers'} className="btn btn-outline-dark">Volver</Link>

                    </div>
                </div>
            </div>

        )
    }
}

export default BeerDetails
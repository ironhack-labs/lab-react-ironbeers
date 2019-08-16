import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/BeerServices'



class BeerDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { beer: {} }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOneBeer(this.props.match.params.id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log('err', err))
    }

    render() {
        return (
            <div className="container">
                <article className="detail">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1>Details of {this.state.beer.name}</h1>
                            <h2>{tagline}</h2>
                            <p><strong>Description:</strong> {this.state.beer.description}</p>
                            <hr></hr>
                            <p>First Brewed: {this.state.beer.first_brewed} | Attenuation Level: {this.state.beer.attenuation_level}</p>
                            <p>Contributed by: {contributed_by}</p>
                            <Link className="btn btn-big btn-dark" to="/beers">Volver</Link>
                        </div>
                        <div className="col-md-4">
                            <img src={this.state.beer.image_url} alt={this.state.beer.name}></img>
                        </div>
                    </div>
                </article>
            </div>
        )
    }

}

export default BeerDetail
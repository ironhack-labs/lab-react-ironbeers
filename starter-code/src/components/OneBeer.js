import React, { Component } from 'react'
import Service from '../service/beer.service'
// import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


class OneBeer extends Component {

    constructor(props) {
        super(props)
        this.state = { beer: {} }
        this._service = new Service()
    }


    componentDidMount = () => {
        const beerId = this.props.match.params.id
        this._service.getOneBeer(beerId)
            .then(theBeer => this.setState({ beer: theBeer.data }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.beer)
        return (
            <section>
                <img src={this.state.beer.image_url} alt="placeHolder" />
                <h1>Details from {this.state.beer.name}</h1>
                <h5>{this.state.beer.tagline}</h5>
                <p> Created by: <small>{this.state.beer.contributed_by}</small></p>
            </section>
        )
    }
}

export default OneBeer


import React, { Component } from 'react'
import BeerServices from '../../services/beer.services'

import BeerCard from './BeerCard'
import Row from 'react-bootstrap/Row';
import Navbar from '../ui/Navbar'

class SingleBeer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getBeer()

    getBeer = () => {
        console.log(this.props.match.params.id)


        this.services.getBeer(this.props.match.params.id)
            .then(Beer => {
                console.log(Beer)
                this.setState({ beer: Beer })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.beer)

        return (
            <>
                <Navbar />
                <Row>

                    <BeerCard {...this.state.beer} />
                    {/* <Col>
                    <h1>{this.state.beer.name}</h1>
                    <img src={this.state.beer.image_url} />
                    <h3>{this.state.beer.tagline}</h3>
                    <p>{this.state.beer.description}</p>



                </Col> */}
                </Row>
            </>
        )
    }
}


export default SingleBeer

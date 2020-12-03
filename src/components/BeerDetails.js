import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import beerApiHandler from '../api-handler';
import BeerInfo from './BeerInfo';
import NavBar from './NavBar';

class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beerApi = new beerApiHandler()
    }


    componentDidMount = () => this.chargeBeerDets()

    chargeBeerDets = () => {
        this.beerApi
            .getOneBeer(this.props.match.params.id)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <NavBar />
                <Row>
                    {this.state.beer
                        ?
                        <BeerInfo {...this.state.beer} />
                        :
                        <h4>Loading...</h4>
                    }
                </Row>
            </Container>
        )
    }
}


export default BeerDetails;
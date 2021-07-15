import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import BeerDetails from './BeerDetails';


class DisplayBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined,
            finalPart: (this.props ? this.props.match.params._id : 'random')
        }
    }

    componentDidMount() {
        console.log(this.state.finalPart)
        const route = "https://ih-beers-api2.herokuapp.com/" + this.state.finalPart
        console.log(route)
        axios
            .get(route)
            // .get('https://ih-beers-api2.herokuapp.com/beers/')
            .then((response) => {
                this.setState({ beer: response.data.filter(beer => beer._id == this.props.match._id) })
                // this.setState({ beer: response.data.filter(beer => beer._id == this.props.match._id) })
            })
            .catch((err) => console.error(err))
    }



    render() {
        return (
            <Container>
                {
                    !this.state.beer
                        ?
                        <h1>Not Yet</h1>
                        :
                        <BeerDetails {...this.state.beer} />

                }
            </Container>
        )
    }
}




export default DisplayBeer
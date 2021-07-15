import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import BeerDetails from './BeerDetails';


class DisplayBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined
        }
    }

    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/" + (this.props.match ? this.props.match.params._id : 'random'))
            .then((response) => {
                console.log(response.data)
                // this.setState({ beer: response.data.filter(beer => beer._id == this.props.match.params._id) })
                this.setState({ beer: response.data })
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

import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import BeerDetails from './BeerDetails';
import BeerBriefInfoCard from './BeerBriefInfoCard';
import Header from './Header';


class DisplayBeers extends Component {
    constructor() {
        super()
        this.state = {
            allBeers: undefined
        }
    }

    componentDidMount() {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                // console.log(response.data)
                this.setState({ allBeers: response.data })
                // console.log(this.state.allBeers)
            })
            .catch((err) => console.error(err))
    }

    render() {
        return (
            <Container>
                {
                    !this.state.allBeers
                        ?
                        <h1>Not Yet</h1>
                        :
                        <>
                            <Header />
                            {this.state.allBeers.map(beer => <BeerBriefInfoCard key={beer._id} {...beer} />)}
                        </>


                }
            </Container>
        )
    }
}




export default DisplayBeers
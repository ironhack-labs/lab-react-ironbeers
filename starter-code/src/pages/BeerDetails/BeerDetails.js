import React, { Component } from 'react';
import BeersService from '../../services/BeersService';
import BeersDetailCard from '../../components/BeerDetailCard';
import Navbar from "../../components/Navbar";
const beersService = new BeersService()
export default class BeersDetail extends Component {
    state = {
        beerPicked: []
    }
    async componentDidMount() {
        const { data } = await beersService.getBeers();
        const beerPicked = data.find(beer => beer._id === this.props.match.params.id)
        this.setState({ beerPicked })
    }
    render() {

        return (
            <>
                <Navbar />
                <BeersDetailCard beer={this.state.beerPicked} />
            </>
        )
    }
}

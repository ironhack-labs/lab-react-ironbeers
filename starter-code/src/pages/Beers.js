import React, { Component } from 'react'
import axios from 'axios'
import Beer from '../components/Beer'
import Header from '../components/Header'
import './Beer.css'


class Beers extends Component {
    state = {
        beers: []
    }

    async componentDidMount() {
        const {data: beers} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        this.setState({ beers })

    }

    render() {
        return (
            <div className="beerGallery">
                <Header />
                { this.state.beers.map( beer => <Beer key={beer._id} beer={beer} />) }
            </div>
        )
    }
}
export default Beers
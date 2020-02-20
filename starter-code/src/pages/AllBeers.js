import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { getAllBeers } from '../services/beers'
import DisplayCard from '../components/DisplayCard'
import { Link } from 'react-router-dom'

class AllBeers extends Component {
    state = {
        beers: []
    };

    async componentDidMount() {
        const beers = await getAllBeers()
        this.setState({
            beers
        })
        console.log(this.state)
    }

    render() {
        return (
            <>
            <NavBar />
            <h1>All Beers</h1>
            {this.state.beers.map((beer, index) => {
                //Siempre poner el key al primer elemento que aparezca.
                return <Link key={index} to={`/beer/${beer._id}`}>
                            <DisplayCard
                                image={beer.image_url}
                                title={beer.name}
                                paragraph={beer.description}
                        />
                        </Link>
            })}
            </>
        )
    }
}

export default AllBeers
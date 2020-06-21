import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component(s)
import Navbar from './Navbar'
import Beer from './Beer';

export default class AllBeers extends Component {
    state = {
        allBeers : [],
        searchTerm : ""
    }

    searchHandler = (search) => {
        this.setState({
            searchTerm : search
        })
    }

    componentDidMount () {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
            this.setState({
                allBeers : beers.data
            })
        })
    }

    render () {
        return(
            <>
                <Link className={"nav-link--home"} to={`/`}>Home</Link>
                <Navbar/>
                <div>
                    {this.state.allBeers.length > 0 
                    ? this.state.allBeers.map((singleBeer) =>  <Link to={"/" + singleBeer._id} key={singleBeer._id}> <Beer singleBeer={singleBeer} /> </Link> ) 
                    : "Loading"}
                </div>
            </>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Beer from './Beer';
import SearchBeer from './SearchBeer';

export default class AllBeers extends Component {
    state = {
        allBeers: [],
        searchTerm: ""
    };

    searchHandler = (search) => {
        this.setState({
            searchTerm: search
        });
    };

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((beers) => {
                console.log(beers.data);
                this.setState({
                    allBeers: beers.data
                });
            });
    };

    render () {
        return (
            <div className="container-md">
                <div className="w-100 h-20 d-flex justify-content-center align-items-center" style={{backgroundColor: "blue", height: "5%"}}>
                    <Link to={'/'} className="w-100" style={{color: "white", height: "100%", width: "100%"}}>
                        <i class="fas fa-home"></i>
                    </Link>
                </div>
                <SearchBeer />
                <div>
                    {this.state.allBeers.map(
                        (singleBeer) => 
                            (
                                <Link to={`/ ${singleBeer._id}`} key={singleBeer._id}>
                                    <Beer singleBeer={singleBeer} />
                                </Link>
                            )
                        ) 
                    }
                </div>
                <hr/>
            </div>
        )
    }
}
import React, { Component } from 'react';
import './BeersList.css'
import { Link } from 'react-router-dom';
import BEER_SERVICE from '../../services/BeerService';
import Header from '../header/Header';
import SearchBar from '../searchbar/SearchBar';

export default class BeersList extends Component {
    state = {
        beers: [],
    } 

    fetchData = () => {
        // console.log(BEER_SERVICE.listAllBeers());

        BEER_SERVICE.listAllBeers()
            .then(beersFromAPI => {
                this.setState({ 
                    beers: beersFromAPI,
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchData();
    }

    searchHandler = (query) => {
        this.setState({ 
            beers: query,
        })
    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar 
                onChangeSearchHandler={this.searchHandler} 
                beers={[...this.state.beers]}
                />
                <div>
                    <h1>All Beers</h1>
                    { this.state.beers.map((beer , i) =>{
                        return (
                            <div key={i}>
                                <div  className="beer-info">
                                    <img 
                                    src={beer.image_url} 
                                    alt='icon' 
                                    className="beer-image"
                                    />

                                    <div className="beer-description">
                                        <h2>{beer.name}</h2>
                                        <p>{beer.tagline}</p>
                                        <p>
                                            <b>Created by: </b>
                                            {beer.contributed_by}
                                        </p>
                                        <Link to={`/beers/${beer._id}`}>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

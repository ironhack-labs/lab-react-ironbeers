import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import Navbar from './Navbar';
import Search from './Search';

class BeersList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listOfBeers: [],
            filteredBeers: []
        };
    }

    getAllBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then( responseFromApi => {
            this.setState({
                listOfBeers: responseFromApi.data,
                filteredBeers: responseFromApi.data
            });
        });
    }

    dynamicSearch = (query) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((responseFromApi) => {
          const searchResult = responseFromApi.data;
          this.setState({ filteredBeers: searchResult });
        })
        .catch((err) => console.log(err));
    }

    componentDidMount() {
        this.getAllBeers();
    }

    /* filterBeers = (searchString) => {
        const beersCopy = [...this.state.listOfBeers];
        const filteredBeers = beersCopy.filter((beer) => {
           if (beer.name.includes(searchString)) {
               return true;
           } else {
               return false;
           }
        })
        this.setState({ beersToShow: filteredBeers })
    } */
    
    dynamicSearch = (query) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((responseFromApi) => {
          const searchResult = responseFromApi.data;
          this.setState({ filteredBeers: searchResult });
        })
        .catch((err) => console.log(err));
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <Search filterBeers={this.dynamicSearch} />
                {this.state.filteredBeers.map(beer => {
                        return(
                            <div className="beer-card" key={beer._id}>
                                <div>
                                    <Link to={`/beers/${beer._id}`}><img className="card-img" src={beer.image_url} /></Link>
                                </div>
                                <div>
                                    <Link className="name-link" to={`/beers/${beer._id}`}>
                                        <h3>{beer.name}</h3>
                                    </Link>
                                    <p className="tagline">{beer.tagline}</p>
                                    <p className="creator"><b>Created by: </b>{beer.contributed_by}</p>
                                </div>
                                
                                
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default BeersList
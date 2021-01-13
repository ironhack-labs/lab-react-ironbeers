import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './NavBar';

class ListBeers extends React.Component {

    state = {
        beers: [],
        loading: true
    };

    componentDidMount() {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(resp => {
                this.setState({
                    beers: resp.data,
                    loading: false
                });
            });
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.beers.map((beer, key) => {
                    return (
                        <Link to={'/beers' + beer._id} key={beer._id}>
                            <img src={process.env.PUBLIC_URL + beer.image_url} alt='featured beer' />
                            <div>
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ListBeers;
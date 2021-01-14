import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class Beers extends React.Component {

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
                {/* Bootstrap spinner */}
                {this.state.loading && (<div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>)}

                {this.state.beers.map((beer, key) => {
                    return (
                        <Link to={'/beers/' + beer._id} key={beer._id}>
                            <img src={process.env.PUBLIC_URL + beer.image_url} alt='featured beer' className='small-beer-picture' />
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

export default Beers;
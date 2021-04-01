import React, { Component } from 'react';
import { getBeers } from '../services/BaseService';
import SyncLoader from 'react-spinners/SyncLoader';
import SingleBeer from './SingleBeer';

class Beers extends Component {
    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        getBeers()
            .then(beers => this.setState({beers, loading: false}))
    }

    render() {
        const { beers, loading } = this.state
        
        return (
            <div className='Beers my-3'>
                {
                    loading
                    ? (
                        <div className="text-center">
                            <SyncLoader color="blue"  />
                        </div>
                    )
                    : (
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {beers.map(beer => (
                                <div key={beer.id}>
                                    <SingleBeer {...beer} />
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Beers;
import React, { Component } from 'react';
import { getAllBeers } from '../services/BaseService';
import SyncLoader from 'react-spinners/SyncLoader';
import SingleBeer from './SingleBeer';

class Beers extends Component {
    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        getAllBeers()
            .then(beers => this.setState({beers, loading: false}))
            .catch(err => console.log(err))
    }

    render() {
        const { beers, loading } = this.state
        
        return (
            <div className='Beers my-3'>
                {
                    loading
                    ? (
                        <div className="text-center">
                            <SyncLoader color="#3ec4fc"  />
                        </div>
                    )
                    : (
                        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex">
                            {beers.map(beer => (
                                <div className="flex-row flex-wrap" key={beer._id}>
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
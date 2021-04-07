import React, { Component } from 'react';
import { getBeers } from '../service/BaseService';
import PacmanLoader from "react-spinners/PacmanLoader";
import BeersItem from './BeersItem';

class Beers extends Component {

    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        getBeers()
            .then(beers => {
                this.setState({ beers, loading: false })
            })
            .catch(() => console.log('error'))
    }

    render() {
        const { beers, loading } = this.state

        return (
            <div className="Beers">
                <div className="container">
                    {
                        loading
                            ?
                            (
                                <div className="text-center">
                                    <PacmanLoader color="yellow" />
                                </div>
                            )
                            :
                            (
                                <div className="card mb-3 mt-3"  style={{border:'none'}}>
                                    {beers.map(beer => (
                                        <div className="row g-0" key={beer._id} style={{ border: '1px solid #D7D7D7' }}>
                                            <BeersItem {...beer} />
                                        </div>
                                    ))}
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Beers;
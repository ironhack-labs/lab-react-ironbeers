import React, { Component } from 'react';
import Header from './Header';
import { getBeers } from '../services/BaseSevices';
import SyncLoader from 'react-spinners/SyncLoader';
import Beer from './Beer';
import { Fragment } from 'react';

class AllBeers extends Component {

    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        getBeers()
            .then(beers => this.setState({ beers, loading: false }))


    }

    render() {
        const { beers, loading } = this.state;


        return (

            <div className="AllBeers">
                <Header />
                {
                    loading
                        ?
                        (
                            <div className="text-center">
                                <SyncLoader color="blue" />
                            </div>
                        )
                        :
                        (
                            <Fragment>
                                {
                                    beers.map((beer) => (
                                        <div className="Beer" key={beer._id}>
                                            <Beer {...beer} />

                                        </div>
                                    ))
                                }
                            </Fragment>
                        )
                }

            </div>

        )

    }
}

export default AllBeers;
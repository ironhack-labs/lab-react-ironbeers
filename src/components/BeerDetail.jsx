import React, { Component } from 'react';
import { getBeerDetail } from '../services/BaseSevices';
import Header from './Header';
import SyncLoader from 'react-spinners/SyncLoader';
import { Fragment } from 'react';




class BeerDetail extends Component {

    state = {
        beer: null,
        loading: true
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        getBeerDetail(id)
        .then((beer) => { this.setState({ beer, loading: false }) })


    }

    render() {
        const { beer, loading } = this.state;
      



        return (
            <div className="BeerDetail" >
                <Header />
                {
                    loading
                        ? (
                            <div className="text-center">
                                <SyncLoader color="blue" />
                            </div>
                        )
                        :
                        (
                            <Fragment>
                                <img src={beer.image_url} alt="" />
                                <h2>{beer.name}</h2>
                                <p>{beer.attenuation_level}</p>
                                <p>{beer.tagline}</p>
                                <p>{beer.first_brewed}</p>
                                <p>{beer.description}</p>
                                <p>{beer.contributed_by}</p>
                            </Fragment>
                        )

                }
            </div>
        );


    }
}

export default BeerDetail;
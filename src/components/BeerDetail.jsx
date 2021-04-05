import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import { getBeer } from '../services/BaseService';
import Navbar from './Navbar';

class BeerDetail extends Component {
    state = {
        beer: null,
        loading: true
    }

    componentDidMount() {
        this.fetchBeer()
    }

    fetchBeer = () => {
        const {id} = this.props.match.params

        getBeer(id)
            .then(beer => this.setState({beer, loading: false}))
    }

    render() {
        const { loading, beer } = this.state
        
        return (
            <>
            <Navbar/>
            {
                loading
                ? (
                    <div className="text-center">
                        <SyncLoader color="#3ec4fc"  />
                    </div>
                )
                : (
                    <>  
                    <p>Beer detail</p>
                        <div className="card h-100 d-flex flex-row flex-wrap" style={{border: 0}}>
                            <div className="col-md-12 img-fluid m-3">
                                <img className="card-img w-25" src={beer.image_url} alt={`${beer.name}-beer-img`}/>
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <h2 className="card-title text-justify">{beer.name}</h2>
                                        <h3 className="card-title text-secondary">{beer.attenuation_level}</h3>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between align-items-start">
                                        <h5 className="card-text text-muted">{beer.tagline}</h5>
                                        <p className="card-text font-weight-bold">{beer.first_brewed}</p>
                                    </div>
                                    <p className="card-text text-justify mt-3">{beer.description}</p>
                                    <p className="card-text font-weight-bold text-secondary text-justify">{beer.contributed_by}</p>
                                </div>
                                <Link to={`/beers`} className="btn btn-outline-primary btn-sm">Back to List</Link>
                            </div>
                        </div>
                    </>
                )

            } 
            </>
        )
    }
}

export default BeerDetail;
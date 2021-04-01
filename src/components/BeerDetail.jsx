import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import { getBeer } from '../services/BaseService';

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
            loading
            ? (
                <div className="text-center">
                    <SyncLoader color="#3ec4fc"  />
                </div>
            )
            : (
                <>
                    <div className="card h-100 d-flex flex-row flex-wrap shadow-sm m-2">
                        <img className="card-img" src={beer.image_url} alt={`${beer.name}-beer-img`}/>
                        <div className="card-body">
                            <h5 className="card-title">{beer.name}</h5>
                            <h5 className="card-title text-muted">{beer.attenuation_level}</h5>
                            <h5 className="card-text text-muted">{beer.tagline}</h5>
                            <h5 className="card-text text-muted">{beer.first_brewed}</h5>
                            <p className="card-text">{beer.description}</p>
                            <p className="card-text"><strong>Created by: </strong>{beer.contributed_by}</p>
                            <Link to={`/beers`} className="btn btn-outline-primary btn-sm">Back to List</Link>
                        </div>
                    </div>
                </>
            )
        )
    }
}

export default BeerDetail;
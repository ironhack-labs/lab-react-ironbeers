import React, { Component } from 'react';
import Navbar from './Navbar';
import { getRandomBeer } from '../services/BaseService';
import SyncLoader from 'react-spinners/SyncLoader';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
    state = {
        randomBeer: null,
        loading: true
    }

    componentDidMount() {
        getRandomBeer()
            .then(randomBeer => this.setState({randomBeer, loading: false}))
            .catch(err => console.log(err))
    }

    render() {
        const { randomBeer, loading } = this.state
        
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
                    <div className="card h-100 d-flex flex-row flex-wrap shadow-sm m-2">
                        <img className="card-img" src={randomBeer.image_url} alt={`${randomBeer.name}-beer-img`}/>
                        <div className="card-body">
                            <h5 className="card-title">{randomBeer.name}</h5>
                            <h5 className="card-title text-muted">{randomBeer.attenuation_level}</h5>
                            <h5 className="card-text text-muted">{randomBeer.tagline}</h5>
                            <h5 className="card-text text-muted">{randomBeer.first_brewed}</h5>
                            <p className="card-text">{randomBeer.description}</p>
                            <p className="card-text"><strong>Created by: </strong>{randomBeer.contributed_by}</p>
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

// export default RandomBeer;
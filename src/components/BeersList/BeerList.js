import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import CircleLoader from 'react-spinners/CircleLoader'
import { getBeers } from '../../services/BaseService';
import { Link } from 'react-router-dom';
import './BeerList.css'

class BeerList extends Component {
    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        getBeers()
            .then(beers => {
                console.log(beers)
                this.setState({ beers, loading: false })
            })
    }

    render() {
        const { beers, loading } = this.state
        
        return (
            <div className="Beers">
                <Navbar />
                
                {
                    loading
                    ? (
                        <div className="m-0 row justify-content-center my-3">
                            <CircleLoader color="#3dc4fc"/>
                        </div>
                        )
                    : (
                            <div className="card-group">
                                {
                                beers.map(beer => 
                                    <div className="card beer-card" key={beer._id}>
                                        <Link to={`/beers/${beer._id}`}><img src={beer.image_url} className="card-img-top img-beer" alt="..."/></Link>
                                        <div className="card-body info-beer">
                                            <h5 className="card-title">{beer.name}</h5>
                                            <p className="card-text tagline mt-3">{beer.tagline}</p>
                                            <p className="card-text creator mt-0"><b>Created by:</b> {beer.name}</p>
                                        </div>
                                    </div>
                                )
                                }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default BeerList;
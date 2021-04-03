import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import CircleLoader from 'react-spinners/CircleLoader'
import { getBeers } from '../../services/BaseService';
import { Link } from 'react-router-dom';
import './BeerList.css'

class BeerList extends Component {
    state = {
        beers: [],
        loading: true,
        search: ''
    }

    componentDidMount() {
        getBeers()
            .then(beers => {
                //console.log(beers)
                this.setState({ beers, loading: false })
            })
    }

    onChange = (e) => {
        this.setState({search: e.target.value})
    }

    filteredBeer = () => {
        if (this.state.search) {
            return this.state.beers.filter(beer => beer.name.toLowerCase().includes(this.state.search.toLowerCase()))
        } else {
            return this.state.beers
        }
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
                            <input className="form-control my-2" onChange={this.onChange} value={this.state.search}></input>
                                { this.state.beers.length &&
                                    this.filteredBeer().map(beer => 
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
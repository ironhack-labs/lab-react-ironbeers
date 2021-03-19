import React, { Component } from 'react'
import Header from './Header';
import '../Styles/BeersList.css';
import {Link} from 'react-router-dom';

export class BeersList extends Component {
    render() {
        return (
            <div className="beersList">
                <Header/>
                {this.props.beers.map((beer) => {
                    return (
                        <Link key={beer._id} to={`/beer/${beer._id}`}>
                            <div className="oneBeer">
                                <div className="image">
                                    <img src={beer.image_url} alt="image"/>
                                </div>
                                <div className="text">
                                    <h1>{beer.name}</h1>
                                    <p className="tag">{beer.tagline}</p>
                                    <p> <strong>Created by:</strong> {beer.contributed_by}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default BeersList

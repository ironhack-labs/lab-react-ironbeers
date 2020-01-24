import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
    render() {


        const RandomBeer = () => {
            const beers = this.props.beers;
            const beer = beers[Math.floor(Math.random() * beers.length)];

            return beer
        }

        const beer = RandomBeer();
        return (
            <div>
                <Link to='/'> <Header /></Link>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img id='beer-img' src={beer.image_url} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{beer.name}</p>
                            <p className="subtitle is-5">{beer.tagline}</p>
                            <p className="subtitle is-5">{beer.first_brewed}</p>
                            <p className="subtitle is-5">{beer.attenuation_level}</p>
                            <p className="subtitle is-5">{beer.description}</p>
                            <p className="subtitle is-5">{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default RandomBeer;
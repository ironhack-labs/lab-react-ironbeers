import React, { Component } from 'react';
import './SingleBeer.css';

class SingleBeer extends Component {
    render() {
        const { beer } = this.props;

        return (
            <div className='SingleBeer'>
                <div className='SingleBeer-img-container'>
                    <img className='SingleBeer-img' src={beer.image_url} alt={beer.name} />
                </div>
                <div className='SingleBeer-line'>
                    <div className='SingleBeer-name'>{beer.name}</div>
                    <div className='SingleBeer-attenuation-level'>{beer.attenuation_level}</div>
                </div>
                <div className='SingleBeer-line'>
                    <div className='SingleBeer-tagline'>{beer.tagline}</div>
                    <div><b>{beer.first_brewed}</b></div>
                </div>
                <div>{beer.description}</div>
                <div className='SingleBeer-contributed-by'>{beer.contributed_by}</div>
            </div>
        );
    }
}

export default SingleBeer;
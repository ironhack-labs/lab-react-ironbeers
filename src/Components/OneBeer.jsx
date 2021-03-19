import React, { Component } from 'react';
import Header from './Header';
import '../Styles/OneBeer.css'

export class OneBeer extends Component {
    render() {
        const beerId = this.props.match.params.id;
        const foundBeer = this.props.beers.find((beer)=>beer._id === beerId);
        return (
            <div className="theBeer">
                <Header/>
                <article>
                    <div id="image">
                        <img src={foundBeer.image_url} alt=""/>
                    </div>
                    <div className="title">
                        <h1>{foundBeer.name}</h1>
                        <h2>{foundBeer.attenuation_level}</h2>
                    </div>
                    <div className="title">
                        <p className="tagline">{foundBeer.tagline}</p>
                        <p className="date">{foundBeer.first_brewed}</p>
                    </div>
                    <p id="description">{foundBeer.description}</p>
                    <p id="creator">{foundBeer.contributed_by}</p>
                </article>
            </div>
        )
    }
}

export default OneBeer

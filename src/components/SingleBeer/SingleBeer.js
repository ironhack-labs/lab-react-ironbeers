import React, { Component } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';
import StatusScreen from '../StatusScreen/StatusScreen';
import './SingleBeer.css';
import Navbar from '../Navbar/Navbar';
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();
class SingleBeer extends Component {

    state = { beer: [], isRandom: this.props.random }

    componentDidMount() {
        if (!this.props.random) {
            punkAPI
                .getBeer(this.props.match.params.id)
                .then(beer => this.setState({beer: beer[0]}))
                .catch(err => console.log(err));
        } else if (this.props.random) {
            punkAPI
                .getRandom()
                .then(beer => this.setState({beer: beer[0]}))
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
            <Navbar />
            <div className="card custom-beer-card">
                <div className="card-image custom-ci">
                    <figure className="image custom-beer-image">
                        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content custom-mcontent">
                            <p className="title is-5 custom-title">{this.state.beer.name}</p>
                            <p className="subtitle is-6 custom-sub">{this.state.beer.tagline}</p>
                            <p className="subtitle is-6 custom-sub attenuation">Attenuation: {this.state.beer.attenuation_level}</p>
                            <p className="title is-6 brewed">First Brewed: {this.state.beer.first_brewed}</p>
                        </div>
                    </div>
                    <div className="content custom-content">
                        {this.state.beer.description}
                        <p className="subtitle is-6 custom-subt">{this.state.beer.contributed_by}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default SingleBeer;

/* export default async function SingleBeer({match}) {
    const [{ data, loading, error }] = useAxios(`https://ih-beers-api2.herokuapp.com/beers/${match.params.id}`);
    if (loading) {return <div><StatusScreen loading={true}/></div>}
    else if (error) {return <div><StatusScreen error={true}/></div>}

        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={beer[0].image_url} alt={beer[0].name} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{beer.name}</p>
                            <p className="subtitle is-6"></p>
                        </div>
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                </div>
            </div>
        );
} */

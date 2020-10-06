import React from 'react';
import { getRandomBeer } from '../services/api-client';
import './RandomBeer.css'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    state = {
        randomBeer: {}
    }

    componentDidMount() {
        getRandomBeer()
        .then(randomBeer => {
            this.setState({
                    randomBeer
            });
        });
    };

    render() {
        const {randomBeer}  = this.state;
        if (!randomBeer) {return (<div>Loading...</div>)
        } else {
            return (
                <div>
                        <div className="singleBeerCard">
                              <img src={randomBeer.image_url} className="singleBeerImg" alt="beer" />
                                <div className="beerName">
                                    <h3>{randomBeer.name}</h3>
                                    <p>{randomBeer.first_brewed}</p>
                                </div>
                                <div className="beerNumber">
                                    <h4>{randomBeer.attenuation_level}</h4>
                                    <h5>{randomBeer.tagline}</h5>
                                </div>
                                <div className="beerDescription">
                                    <p>{randomBeer.description}</p>
                                    <p>{randomBeer.contributed_by}</p>
                                </div>
                               <div>
                            </div>
                        </div>
                </div>
            );
        };
    };
};
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { randomBeer } from './../services/beers-api';

class RandomBeer extends Component {
    state = {
        random: null
    }

    componentDidMount () {
        this.loadRandomBeer();
    }

    componentDidUpdate (previousProps) {
        if (previousProps.match.params.id !== this.props.match.params.id) {
        this.loadRandomBeer();
        }
    }    

    async loadRandomBeer () {
        const id = this.props.match.params.id;
        const random = await randomBeer(id);
        this.setState({
            random: random
        });
    }

    render() {
        const random = this.state.random;
        return (
            <div>
                {random && (
                    <>
                    <img src={random.image_url} alt={random.name} />
                    <h1>{random.name}</h1>
                    <h4>{random.tagline}</h4>
                    <h4>{random.first_brewed}</h4>
                    <p>{random.attenuation_level}</p>
                    <p>{random.description}</p>
                    <p>{random.contributed_by}</p>
                    </>
                )}
            </div>
        );
    }
}

export default RandomBeer;

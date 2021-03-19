import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { singleBeer } from './../services/beers-api';

class SingleBeer extends Component {
    state = {
        single: null
    }

    componentDidMount () {
        this.loadSingleBeer();
    }

    componentDidUpdate (previousProps) {
        if (previousProps.match.params.id !== this.props.match.params.id) {
        this.loadSingleBeer();
        }
    }    

    async loadSingleBeer () {
        const id = this.props.match.params.id;
        const single = await singleBeer(id);
        this.setState({
            single: single
        });
    }

    render() {
        const single = this.state.single;
        return (
            <div>
                {single && (
                    <>
                    <img src={single.image_url} alt={single.name} />
                    <h1>{single.name}</h1>
                    <h4>{single.tagline}</h4>
                    <h4>{single.first_brewed}</h4>
                    <p>{single.attenuation_level}</p>
                    <p>{single.description}</p>
                    <p>{single.contributed_by}</p>
                    </>
                )}
            </div>
        );
    }
}

export default SingleBeer;

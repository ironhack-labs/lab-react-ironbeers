import React, { Component } from 'react';
import beerApi from '../api/beerApi.js'

 class OneBeer extends Component {

    state = {
        beer: null,
    };

    componentDidMount() {
        beerApi
        .getOneBeer(this.props.match.params.id)
        .then((apiRes) => {
            console.log(apiRes.data);
            this.setState({
                beer: apiRes.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        // console.log(this.props.match.params.id)
        let oneBeer = this.state.beer
        return (
            <div>
                {oneBeer && <>
                <img src={oneBeer.image_url} alt=''/>
                <h1>{oneBeer.name}</h1>
                <h2>{oneBeer.tagline}</h2>
                <p>{oneBeer.first_brewed}</p>
                <p>{oneBeer.attenuation_level}</p>
                <p>{oneBeer.description}</p>
                <p>{oneBeer.contributed_by}</p>
                </>}
            </div>
        )
    }
}


export default OneBeer
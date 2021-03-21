import React, { Component } from 'react'
import Header from '../Components/Header';
import axios from 'axios';

export class OneBeer extends Component {
    state = {
        beer: null,
    };

    componentDidMount() {
        const id = this.props.match.params.toto;

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => {
                this.setState({ beer: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.beer === null) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Header />
                <h1>One Beer !</h1>
                <img src={this.state.beer.image_url} alt="" />
                <h2><b>Name:</b> {this.state.beer.name}</h2>
                <p><b>Tagline:</b> {this.state.beer.tagline}</p>
                <p><b>First brewed:</b> {this.state.beer.first_brewed}</p>
                <p><b>Attenuation level:</b> {this.state.beer.attenuation_level}</p>
                <p><b>Description:</b> {this.state.beer.description}</p>
                <p><b>Contributed by:</b> {this.state.beer.contributed_by}</p>
            </div>
        )
    }
}

export default OneBeer;
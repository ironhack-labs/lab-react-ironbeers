import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from "axios";

export default class BeerInfo extends Component {
    state = {
        beer: {},
        url: "https://ih-beers-api2.herokuapp.com/beers/"
    };

    componentDidMount() {
        axios
            .get(`${this.state.url}${this.props.match.params.id}`)
            .then(apiRes => this.setState({beer:apiRes.data}))
            .catch(apiErr => console.error(apiErr))
    };

    render() {
        const {beer} = this.state
        return beer ? (
            <div>
                <Navbar/>
                <div className="box-info-beer">
                    <div className="pic-beer">
                        <img src={beer.image_url} alt=""/>
                    </div>
                    <div className="unique-beer-info">
                        <ul key={beer._id}>
                            <li>{beer.name}</li>
                            <li>{beer.tagline}</li>
                            <li>{beer.first_brewed}</li>
                            <li>{beer.attenuation_level}</li>
                            <li>{beer.description}</li>
                            <li>{beer.contributed_by}</li>
                        </ul>
                    </div>
                </div>
            </div>
        ) : (
            <p>beer not found</p>
        )
    }
}

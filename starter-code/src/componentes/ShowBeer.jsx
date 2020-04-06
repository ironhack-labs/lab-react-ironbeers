import React, { Component } from 'react'
import axios from "axios"

export default class ShowBeer extends Component {
    constructor(props) {
        super(props)


        this.state = {
            beers: ""
        };

    }
    async componentDidMount() {
        let beer
        if (this.props.match.path === "/random-beer") {
            beer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            this.setState({ beers: beer.data });

        } else {
            beer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`);
            this.setState({ beers: beer.data });

        }

    }

    render() {


        return (
            <div className="d-flex flex-nowrap flex-row " >
                <div className="mb-2 img-fluid">
                    <img style={{ maxWidth: '100px', maxHeight: '100px' }} alt={this.state.beers.name} src={this.state.beers.image_url}></img>
                </div>
                <div>
                    <h3 className="">{this.state.beers.name}</h3>
                    <h6 className="">{this.state.beers.tagline}</h6>
                    <p className="">Created by: {this.state.beers.contributed_by}</p>
                    <p className="">Created by: {this.state.beers.first_brewed}</p>
                    <p className="">Created by: {this.state.beers.attenuation_level}</p>
                    <p className="">Created by: {this.state.beers.description}</p>
                    <p className="">Created by: {this.state.beers.contributed_by}</p>
                    <p className="">Created by: {this.props.match.path}</p>




                    <p></p>
                </div>
            </div>
        )
    }
}

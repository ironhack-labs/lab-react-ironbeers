import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BeersDetails.css';
import axios from 'axios';

class BeersDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: {}
        }
    }

    componentDidMount() {
        console.log("State", this.state)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
            .then(response => {
                this.setState({ beer: response.data })
            })
    }
    getBeersDetails = () => {
        const id = this.props.match.params.beerId
        const beerSelected = this.state.beer
        if (beerSelected) {
            return (
                <>
                    <div className="cardDetails">
                        <div className="card_image">
                            <img src={beerSelected.image_url} style={{ width: "100px", height: "250px" }} alt="Beer" />
                        </div>
                        <div className="card_inf">
                            <h2>{beerSelected.name}</h2>
                            <h3>{beerSelected.tagline}</h3>
                            <p> <strong> First Brewed: </strong>{beerSelected.first_brewed}</p>
                            <p> <strong> Attenuation Level: </strong>{beerSelected.attenuation_level}</p>
                            <p> {beerSelected.description}</p>
                            <p> <strong>Created by: </strong> {beerSelected.contributed_by}</p>
                        </div>
                    </div>
                </>
            )
        }
        return null;
    }

    render() {
        return (
            <div >
                {this.getBeersDetails()}
            </div>
        );
    }
}

export default BeersDetails;
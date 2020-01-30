import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class singleBeer extends Component {
    constructor(props) {
        super(props);
        this.beerId = props.match.params.beerId;
        this.state = {
            singleBeer: []
        };
    }

    componentDidMount() {
        let singleBeerPath = "https://ih-beers-api2.herokuapp.com/beers/" + this.beerId;
        axios.get(singleBeerPath)
            .then(response => {
                this.setState({ singleBeer: response.data })
            })
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/"> <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home" /> </Link>
                </header>
                <div>
                    <img src={this.state.singleBeer.image_url} alt="singleBeerPic" />
                    <div><h2>{this.state.singleBeer.name}</h2><h2 className="greyH2">{this.state.singleBeer.attenuation_level}</h2></div>
                    <p><span>{this.state.singleBeer.tagline}</span><span>{this.state.singleBeer.first_brewed}</span></p>
                    <p>{this.state.singleBeer.description}</p>
                    <span>{this.state.singleBeer.contributed_by}</span>
                </div>
            </div>
        )
    }
}

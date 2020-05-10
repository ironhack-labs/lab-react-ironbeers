import React from 'react';
import axios from "axios";
import '../App.css';

class RandomBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomBeer: null,
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((apiResponse) => {
                console.log(apiResponse)
                this.setState({ randomBeer: apiResponse.data })
            })
            .catch((apiError) => {
                console.log(apiError)
            })
    }

    render() {

        if (!this.state.randomBeer) return null;

        return (
            <div>
                <br />
                <img className="img" src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name} />
                <h1>{this.state.randomBeer.name}</h1>
                <h2>{this.state.randomBeer.attenuation_level}</h2>
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.first_brewed}</p>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeer


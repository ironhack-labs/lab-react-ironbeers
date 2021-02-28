import React, { Component } from 'react'
import axios from 'axios';

class BeerDetails extends Component {
    state = {
        image: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: 0,
        description: "",
        contributed_by: "",
    }

    getOneBeer = () => {
        console.log(this.props.location.pathname)
        const { beerId } = this.props.match.params;

        if (this.props.location.pathname === `/allbeers/${beerId}`) {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then( (apiResponse) => {
                const oneBeer = apiResponse.data;
                const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = oneBeer;
                this.setState({image: image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by});
            })
            .catch( (err) => console.log(err));
        }
        else {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then( (apiResponse) => {
                const oneBeer = apiResponse.data;
                const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = oneBeer;
                this.setState({image: image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by});
            })
            .catch( (err) => console.log(err));
        }
    }

    componentDidMount() {
        this.getOneBeer();
    }

    render() {
        return (
            <div>
                <button onClick={this.props.history.goBack}>Go back</button>
                <div>
                    <img src={this.state.image} />
                </div>
                <div>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.attenuation_level}</p>
                </div>
                <div>
                    <h3>{this.state.tagline}</h3>
                    <p>{this.state.first_brewed}</p>
                </div>
                <p>{this.state.description}</p>
                <p>{this.state.contributed_by}</p>
            </div>
        )
    }
}

export default BeerDetails;
import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Beer extends React.Component {
    state = { beer: {} }

    componentDidMount() {
        axios.get(`https://ih-beer-api.herokuapp.com/beers/random`)
            .then(theBeer => {
                this.setState({
                    beer: theBeer.data
                })
        })
    }
    render() {
        return (
            <div className="Beer">
                Details
                {this.props.match.params.id}

                <h1>{this.state.beer.name}</h1>
                <h2>{this.state.beer.tagline}</h2>
                <img width="25px" src={this.state.beer.image_url}/>

            </div>
        );
    }
}

export default Beer;

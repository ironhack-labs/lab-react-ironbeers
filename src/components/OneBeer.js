import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class OneBeer extends React.Component {
    state = {
        beer: {},
        loading: true
    }
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.match.params._id)
            .then(response => {
                this.setState({ beer: response.data, loading: false })
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
                {this.state.loading && <h1>LOADING...</h1>}
                <h5><Link to={"/"}>HOME</Link></h5>
                <h2>{this.state.beer.name}</h2>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.brewers_tips}</p>
                <img src={this.state.beer.image_url}></img>
            </div>
        )
    }
}

// props.match.params is the parts of the URL that *you* named
// e.g. /education/:PandaPotato
// console.log("THE params: ", props.match.params)

export default OneBeer;
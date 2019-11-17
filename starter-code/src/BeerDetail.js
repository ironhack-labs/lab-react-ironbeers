import React, { Component } from 'react';
import axios from 'axios'

class BeerDetail extends Component {

    state={
        specificBeer: {}
    }

    componentDidMount() {
        //https://ih-beers-api2.herokuapp.com/beers/5daf440ccbc5d2fd7d19ebe6
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
            .then(specificBeer => {
                this.setState({
                    specificBeer:specificBeer.data
                })
            })
    }
    render() {
        return (
            <div>
                Details
                {this.props.match.params.beerId}
                <img src={this.state.specificBeer.image_url} />
                {this.state.specificBeer.name}
            </div>
        );
    }
}

export default BeerDetail;
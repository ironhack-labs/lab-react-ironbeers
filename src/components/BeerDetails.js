import React, { Component } from 'react';
import Header from './Header';
import BeerInfo from './BeerInfo';
import axios from 'axios';


class BeerDetails extends Component {
    state = {
        beer: []
    }

    componentDidMount () {
        const selectedBeerId = this.props.match.params.beerId;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${selectedBeerId}`)
            .then(response => {
                //console.log(response.data)
                this.setState({ beer: response.data });
            });
    }

    render(){
        return(
            <div>
                <Header />
                <BeerInfo beer={this.state.beer} />
            </div>
        )
    }
}

export default BeerDetails;
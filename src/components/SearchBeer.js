import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBeer extends Component {
    state = {
        beer: null
    }

    searchHandler = (event) => {
        let currentInputValue = event.target.value;
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.searchHandler}`)
            .then((singleBeer) => {
                // console.log(singleBeer.data);
                this.setState({beer: singleBeer.data});
            });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.beerName} onChange={this.searchHandler} />
            </div>
        );
    }
}
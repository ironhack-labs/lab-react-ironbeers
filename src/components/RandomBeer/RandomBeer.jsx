import React, { Component } from 'react'
import ListBeer from '../ListBeer/ListBeer';

export default class RandomBeer extends Component {
    state = {
        apiResults: [],
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => response.json())
        .then(results => {
            this.setState({apiResults: results})
        })
        .catch((e) => console.log(e))
    }

    render() {
        return (
          <div>
            <ListBeer randomResult={this.state.apiResults} />
          </div>
        );
    }
}

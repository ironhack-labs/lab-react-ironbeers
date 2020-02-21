import React, { Component } from 'react'
import HeaderHome from '../components/HeaderHome'
import apiHandler from '../api/api'
import BeerDetails from '../components/BeerDetails'

const api = new apiHandler();

export default class RandomBeer extends Component {
state = {
    random : null
}
componentDidMount() {
    api
      .get(`/beers/random`)
      .then(apiRes => {this.setState({ random: apiRes.data });
    console.log(apiRes)})
      .catch(apiErr => console.error(apiErr));
  }
    render() {
        const { random } = this.state;
        return (
            <div>
                <HeaderHome/>
                {random ? <BeerDetails beerToDisplay={random}/> : <p>No beer yet !</p>}
            </div>
        )
    }
}


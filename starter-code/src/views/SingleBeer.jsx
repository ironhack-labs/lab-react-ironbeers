import React, { Component } from 'react'
import apiHandler from "../api/api";
import BeerDetails from '../components/BeerDetails'

const api = new apiHandler();

export default class SingleBeer extends Component {
    state = {
        beer : null
    }
    componentDidMount() {
    api
      .get(`/beers/${this.props.match.params.beerId}`)
      .then(apiRes => {this.setState({ beer: apiRes.data });
    console.log(apiRes)})
      .catch(apiErr => console.error(apiErr));
  }

    render() {
        const { beer } = this.state;
        return beer ?(
            <BeerDetails beerToDisplay={beer}/>
        ) : <p> No beer yet!</p>
    }
}

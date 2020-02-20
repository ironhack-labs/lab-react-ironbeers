import React, { Component } from 'react'
import APIEndpoint from "../api/Handler"

export default class Beers extends Component {

    state = {
        beers:[]
    }

    api = new APIEndpoint()

    componentDidMount() {
        this.api
          .get("/beers")
          .then(apiRes => this.setState({beers: apiRes.data}))
          .catch(apiErr => console.error(apiErr));
      }

    render() {
        return this.state.beers.length? (
            <div>
                {this.state.beers.map((beer,i) => (
                    <div key={i}>{beer.name}</div>
                ))}
            </div>
        ) : (
            <p>no beers yet...</p>
        );
    }
}


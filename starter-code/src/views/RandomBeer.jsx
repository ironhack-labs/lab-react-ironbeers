import React, { Component } from 'react'
import APIEndpoint from "../api/Handler"
import "./../styles/SingleBeer.css"

export default class SingleBeer extends Component {

    state = {
        beer:{}
    }

    api = new APIEndpoint()

    componentDidMount() {
        this.api
          .get(`/beers/random`)
          .then(apiRes => this.setState({beer: apiRes.data}))
          .catch(apiErr => console.error(apiErr));
      }

    render() {
        return this.state.beer? (
            <div className="oneBeer-cont">
                <img src={this.state.beer.image_url} alt='beer'/>
                <tbody className="table">
                    <tr>
                        <td><h4>{this.state.beer.name}</h4></td>
                        <td><h4 style={{textAlign:"right"}}>{this.state.beer.attenuation_level}</h4></td>
                    </tr>
                    <tr>
                        <td>{this.state.beer.tagline}</td>
                        <td>{this.state.beer.first_brewed}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" >{this.state.beer.description}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" >{this.state.beer.contributed_by}</td>
                    </tr>
                </tbody>
            </div>
        ):
        <p>Lodding...</p>
    }
}

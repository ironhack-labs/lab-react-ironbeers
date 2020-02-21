import React, { Component } from 'react'
import APIEndpoint from "../api/Handler"
import {Link } from 'react-router-dom'

import "./../styles/Beers.css"

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
        {console.log(this.state.beers)}
        return this.state.beers.length? (
            <div className="beers-cont">
                {this.state.beers.map((beer,i) => (
                    <div className="beer-cont" key={i}>
                        <img src={beer.image_url} alt='beer'/>
                        <div>
                            <Link to={`/beers/${beer._id}`} className="link" ><h2>{beer.name}</h2></Link>
                            <h3>{beer.tagline}</h3>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p>no beers yet...</p>
        );
    }
}


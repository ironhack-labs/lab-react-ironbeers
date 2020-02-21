import React, {Component} from "react";
import axios from "axios";
import "./../styles/Beers.css";
import {Link} from "react-router-dom";

export default class Beers extends Component {
    state = {
        beers: [],
        api: "https://ih-beers-api2.herokuapp.com/beers"
    }

    componentDidMount() {
        axios
        .get(this.state.api)
        .then(apiRes => this.setState({ beers: apiRes.data }))
        .catch(apiErr => console.error(apiErr));
    }

    filterBeers(input){
        axios
        .get(`${this.state.api}/search?q=${"^"+input}`)
        .then(apiRes => this.setState({beers: apiRes.data}))
        .catch(apiErr => console.log(apiErr))
    }

    render() {
        return this.state.beers ? (
            <section className="page beers-page">
                <div className="beers-header">
                    <h1>All Beers</h1>
                    <input type="text" placeholder="Search" onChange={e => this.filterBeers(e.target.value)}/>
                </div>
                {this.state.beers.map((beer, i) => (
                    <div className="beer-box" key={i}>
                        <div className="beer-img">
                            <img src={beer.image_url} alt={beer.name}/>
                        </div>
                        <div className="beer-info">
                            <h2><Link to={"/all-beers/"+beer._id} >{beer.name}</Link></h2>
                            <p>{beer.tagline}</p>
                            <p>Created by : {beer.contributed_by}</p>
                        </div>
                    </div>
                ))}
            </section>
        ) : <p>Loading...</p>
    }
}


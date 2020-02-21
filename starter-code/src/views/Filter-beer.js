import React, { Component } from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom"; //  npm i axios

export default class FilterBeer extends Component {

    state = {
        beers: [],
        APIEndpoint:
            "https://ih-beers-api2.herokuapp.com/beers/search?q=",
        search: ""
    };

    handleChangeSearch = event => {
        this.setState({ search: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let APIEndpointCompleted = this.state.APIEndpoint+this.state.search;

        axios
            .get(APIEndpointCompleted)
            .then(apiRes => this.setState({ beers: apiRes.data }))
            .catch(apiErr => console.error(apiErr));
    }

    render() {
        return this.state.beers.length ? (

                <div className="page">

                    <h1 className="title">Searched Beers</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Beer searched :
                            <input type="text" name="search" onChange={this.handleChangeSearch} />
                        </label>
                        <button type="submit">Search</button>
                    </form>

                    {this.state.beers.map((b, i) => (
                        <div key={i} className="beer1">
                            <div  className="beer11"> <img src={b.image_url} className="img-beer" /> </div>
                            <div  className="beer12">
                                <ul>
                                    <li>
                                        {b.name}
                                    </li>
                                    <li>
                                        {b.tagline}
                                    </li>
                                    <li>
                                        {b.contributed_by}
                                    </li>
                                    <li>
                                        {b._id}
                                        <NavLink  to={`/one-beer/${b._id}`} >See beer</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    ))}
                </div>
            )
            :
            (
                <div className="page">
                <h1 className="title">Searched Beers</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Beer searched :
                        <input type="text" name="search" onChange={this.handleChangeSearch} />
                        </label>
                        <button type="submit">Search</button>
                    </form>
                </div>
    );



    }

}




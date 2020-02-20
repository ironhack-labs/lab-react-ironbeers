import React, { Component } from "react";
import axios from "axios"; //  npm i axios;
// import HeaderMain from './HeaderMain'
import { Link } from "react-router-dom";

export default class Beers extends Component {
    state = {
        beers: [],
        APIEndpoint:
            "https://ih-beers-api2.herokuapp.com/beers"
    };

    componentDidMount() {
        axios
            .get(this.state.APIEndpoint)
            .then(apiRes => this.setState({ beers: apiRes.data }))
            .catch(apiErr => console.error(apiErr));
    }

    render() {
        return this.state.beers ? (

            <div>
                {/* <HeaderMain /> */}
                <h1 className="title">All beers here!</h1>
                {this.state.beers.map((b, i) => (
                    <div key={i}>
                        <Link to={`/SingleBeer/${b._id}`}>
                            <img src={b.image_url} alt="" />
                        </Link>
                        {b.name}
                        {b.tagline}
                        {b.contributed_by}
                        <Link to="/RandomBeer/:id"></Link>  (
          </div>
                ))}
            </div>
        ) : (
                <p>no beers yet...</p>
            );
    }
}

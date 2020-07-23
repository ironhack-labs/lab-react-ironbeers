import React, { Component } from 'react';
import Header from '../components/Header';
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

export class ListBeers extends Component {
    state = {
        beers: [],
    };

    componentDidMount() {
        apiHandler
            .getAllBeers()
            .then((apiRes) => {
                console.log(apiRes.data)
                this.setState({ beers: apiRes.data });
            })
            .catch((apiError) => console.log(apiError));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="Pokemons">
                    {this.state.beers.map((beer) => {
                        return (
                            <div key={beer._id} id="beers">
                                <div>
                                    <Link to={"/beers/" + beer._id}>
                                        <img style={{ height: "150px", margin:"40px"}} src={beer.image_url} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <Link style={{textDecoration:"none", color:"inherit"}} to={"/beers/" + beer._id}>
                                        <p style={{fontSize:"30px"}}>{beer.name}</p>
                                    </Link>
                                    <p>{beer.tagline}</p>
                                    <p>Created by : {beer.contributed_by}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        )
    }
}

export default ListBeers
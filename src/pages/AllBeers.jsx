import React from 'react';
import Header from "../components/Header";
import beersAPI from "../api/beersApi";
import { Link } from "react-router-dom";
import "../styles/all-beers.css"

class AllBeers extends React.Component {

    state = {
        beers: [],
    };

    componentDidMount() {
        beersAPI
            .getBeers()
            .then((apiResponse) => {
                console.log(apiResponse);
                this.setState({ beers: apiResponse.data })
            })
            .catch((apiError) => {
                console.log(apiError)
            });
    }


    render() {
        return (
            <div>
                <Header />
                <div id="main-all-beers">
                    <h1>All Beers</h1>
                    {this.state.beers.map((beer) => (
                            <Link key={beer.name} to={`/allBeers/${beer._id}`}>
                                                        {/* /beers/:beerId */}
                                <div className="all-beers">
                                    <div className="wrap-img">
                                        <img src={beer.image_url} alt="beers" />
                                    </div>
                                    <div className="text-all-beers">
                                        <h3>{beer.name}</h3>
                                        <p>{beer.tagline}</p>
                                        <p><b>Created by :</b>{beer.contributed_by}</p>
                                    </div>
                                </div>
                            </Link> 
                    ))}
                </div>
            </div>
        )
    }

}

export default AllBeers;

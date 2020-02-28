//import React from "react";
import React from 'react';
import SingleBeer from "./SingleBeer";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Beers extends React.Component {
    state = {
        allBeers: []
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(allBeers => {
                allBeers = allBeers.data;

                this.setState({
                    allBeers: allBeers
                });
            });

    }

    // axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    //     .then(beer => this.setState({ ...this.state, beer: beer.data }))


    render() {
        return (
            <div>
                <nav className="navbar">
                    <Link to={"/"}> <button>🍻</button></Link>
                </nav>


                <h1>All Beers</h1>
                {/* {(this.state.beer) ? <SingleBeer beer={this.state.beer}></SingleBeer>:<p>"wait"</p>} */}

                {this.state.allBeers.map(beer => {
                    return (
                        <div key={beer._id}>
                            <Link to={`/beer/${beer._id}`}>
                                <h3>{beer.name}</h3>
                                <img src={beer.image_url} alt=""/>
                            </Link>

                        </div>
                    )
                })
                }
            </div>
        )
    }
}
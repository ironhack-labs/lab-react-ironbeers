import React from "react";
import axios from 'axios';
import Beer from './Beer';
import { Link } from 'react-router-dom';
import './beers.css';

class Beers extends React.Component {

    state = {
        beers: [],
    }


    componentDidMount() {
        axios
            .get("http://localhost:5000/all")
            .then(allBeersPayload => {
                const allBeers = allBeersPayload.data

                this.setState({
                    ...this.state,
                    beers: allBeers
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.beers.map((beer, idx) => {
                        return (
                        <div className="beer" key={idx}>
                            <img src={beer.image_url} alt={beer.name}></img>
                            <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
                            <p>{beer.tagline}</p>
                            <p><strong>Created by:</strong> {beer.contributed_by}</p>
                        </div>
                    )}
                )}
            </div>
        )
    }
}

export default Beers;

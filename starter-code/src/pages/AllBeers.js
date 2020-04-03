import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }
    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({beers: response.data})
            })
    }
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                {this
                    .state
                    .beers
                    .map(beer => <div>
                        <img src={beer.image_url} alt={beer.name}/>
                        <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                        <h2>{beer.tagline}</h2>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>)}
            </div>
        )
    }
}

export default AllBeers;
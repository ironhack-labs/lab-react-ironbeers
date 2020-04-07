import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allBeers: []  
        }
    }

    componentDidMount() {
        debugger
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            this.setState({allBeers: response.data})
            console.log(response)
        })
    }

    render() {
        debugger
        return (
            <div className="all-beers-page">
                {this.state.allBeers.map((beer, index) => 
                <div key={beer.id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url}></img>
                        <h1>{beer.name}</h1>
                    </Link>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.contributed_by}</p>
                    <hr></hr>
                </div>
                )}
                
            </div>
        )
    }
}

export default AllBeers

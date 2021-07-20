import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeersList extends Component {
	state = { 
        beers: []
     }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then (resp => {
            this.setState({
                beers: resp.data
            })
            console.log(this.state.beers)
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            this.state.beers.map(beer => {
            return (
                <div key={beer._id}>
                    <div className="beer-container">
                        <div className="beer-image">
                            <img src={beer.image_url} alt={beer.name} height="200px" />
                        </div>
                        <div className="beer-info">
                            <Link 
                            key={beer._id}
                            to={`/${beer._id}`}>
                                <h2>{beer.name}</h2>
                            </Link>
                            <p>{beer.tagline}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        })
        )
    }
}
 
export default BeersList;
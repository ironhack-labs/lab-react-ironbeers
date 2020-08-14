import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

class BeersList extends Component {

    constructor() {
        super();
        this.state = {listOfBeers: []};
    }

    getAllBeers = () => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(responseFromApi => {
                this.setState({
                    listOfBeers: responseFromApi.data
                });
            });
    }

    componentDidMount() {
        this.getAllBeers();
      }

    render() {
        return(
            
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                {this.state.listOfBeers.map(beer => {
                    return (
                    <div className="card" key={beer._id}>
                    <img src={beer.image_url} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                        <h4>{beer.tagline}</h4>
                        <h5 className="card-title">Contributed by {beer.contributed_by}</h5>
                    </div>
                    </div>
                    )
                })}
                </div>
            </div>

        )
    }

}

export default BeersList;
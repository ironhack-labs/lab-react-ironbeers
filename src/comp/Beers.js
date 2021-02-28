import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default class Beers extends React.Component {

    state = {
        allBeers: []
    }

    getAllBeers = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                const data = response.data
                this.setState({ allBeers: data })
                console.log('data: ', data)
            })
            .catch(err => console.log('Error: ', err))
    }

    componentDidMount() {
        this.getAllBeers();
    }

    render() {
        return (
            <div className="container">

                {this.state.allBeers.map((beer) => (
                    <div key= {beer._id} className="col-sm-4 beerList">
                        <div>
                            <img src={beer.image_url} alt="beers" className="beer-img" alt={beer.name}></img> 
                        </div>
                        <div className="beer-name">
                            <Link to={`/beers/${beer._id}` }> <h3>{beer.name}</h3> </Link>
                            <h5>{beer.tagline}</h5>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class BeerList extends Component {
    state = {
        beerList: []
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beerList: response.data})
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                    {this.state.beerList.map(beer => (
                        <div className="card mb-3" key={beer._id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={beer.image_url} alt="..." height="155px" />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body text-start">
                                    <h5 className="card-title">{beer.name}</h5>
                                    <p className="card-text text-muted">{beer.tagline}</p>
                                    <p className="card-text"><small>Created by: {beer.contributed_by}</small></p>
                                </div>
                                </div>
                            </div>
                            <Link to={`beers/${beer._id}`} className="stretched-link"></Link> 
                            {/* streched-link convierte la card en un link */}
                        </div>
                    ))}
                

            </div>
        )
    }
}

export default BeerList

import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListBeers extends Component {

    state = {
        beers: []
    }

    async componentDidMount(){
        let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        this.setState({
            beers: response.data
        })
        console.log(this.state.beers)
    }
    render() {
        const {beers} = this.state
        if (beers.length === 0) {
            return (
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
              </div>
            )
        }
        return (
            <div>
                {
                    beers.map((beer, i) => {
                        return <div className="card mb-3" styles="max-width: 540px;" key={beer._id}>
                                    <Link to={`/beer/${beer._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={`${beer.image_url}`} style={{ maxHeight: 200 }}className="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{beer.name}</h5>
                                                    <p className="card-text">{beer.tagline}</p>
                                                    <p className="card-text"><small className="text-muted">Created by: {beer.contributed_by}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                    })
                 }
            </div>

        )
    }
}

export default ListBeers;
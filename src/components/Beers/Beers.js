import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Beers.css';


export default class Beers extends Component {

    state = {
        beers: [],
        search: ''
      }
    
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
            this.setState({ beers: response.data })
        })
    } 

    handleChange = (event) => {
        this.setState({ search: event.target.value })
    }

    render() {
        const filtered = this.state.beers.filter(beer => 
            beer.name.toLowerCase().includes(this.state.search.toLowerCase())
        )

        return (
            <>
                <input 
                    type="text"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleChange}
                />
                { filtered.map(beer=> {
                    return (
                        <div className="beers-card" key={ beer._id }>
                            <div className="beers-card-img">
                                <img src={ beer.image_url } alt="beer"/>
                            </div>
                            <div className="beers-card-text">
                                <Link to={`/beers/${beer._id}`}> 
                                    <h2>{ beer.name }</h2>
                                </Link>
                                <h4>{ beer.tagline }</h4>
                                <h6>Created by: { beer.contributed_by }</h6>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

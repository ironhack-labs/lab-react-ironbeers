import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './nav';
import {getAllBeers} from '../utils/beer';

class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: []     
        }
    }

    componentDidMount() {
        debugger
        getAllBeers()
        .then(response => {
            this.setState({beers: response.data})
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        debugger
        return (    
            <div className="list">
                <Navbar />
                <h1 className="title is-1">beers</h1>
                {this.state.beers.map((beer) => {
                    return (
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                <figure className="image is-32x32">
                                    <img src={beer.image_url} alt="beer"/>
                                </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                        <strong><h3 className="title is-3"><Link to={`/beer-detail/${beer._id}` }>{beer.name}</Link></h3></strong>
                                        </p>
                                        <h5 className="title is-5">{beer.tagline}</h5>
                                        <h6 className="subtitle is-6">Created by: {beer.contributed_by}</h6>
                                    </div>
                                
                                </div>
                            </article>
                        </div>

                    )
                                      
                })}
            </div>
        )
    }
}

export default Beers;


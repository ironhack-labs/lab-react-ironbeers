import React, { Component } from 'react';
import axios from 'axios';
import './beers.css';
import {Route, Link} from 'react-router-dom';


export default class Beers extends Component {
    state={
        beers: [],
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then( responsefromApi => {
            this.setState({
                beers: responsefromApi.data
            });
        });
        }

    render() {
        return (
            <div>
               <header className='home-header'>
               <Route>
                <Link to ='/'>
                <img className="home-icon" src='./home.png' alt=''></img>
                </Link>
               </Route>
               </header> 
               <div className='beer-list'>
                   {this.state.beers.map((beer) => (
                       <div key={beer._id} className="beer-card">
                       <div>
                       <img className="beer-image" src={beer.image_url} alt=''></img>
                       </div>
                       <div className="beer-text">
                       <Link className="beer-link" to={`beers/${beer._id}`}>
                           <h2>{beer.name}</h2>
                       </Link>
                       <p className="beer-tag">{beer.tagline}</p>
                       <p>Created by: {beer.contributed_by}</p>
                       </div>
                       </div>
                   ))}
            </div>
            </div>
        )
    }
}

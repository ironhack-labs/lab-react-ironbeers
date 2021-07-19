import React, { Component } from 'react';
import './Beers.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {

    state = {
        beers : null
    }

    getBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data)
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getBeers()
    }

    render() {

        if (!this.state.beers) return <> </>;
        return (
            <>
                <header>
                    <Link to='/'>
                        <img src='/home-icon.png' alt='home-icon'/>
                    </Link>
                </header>
                <div>
                    {this.state.beers.map(beer => {
                        return(
                            
                            <div className='beer-container' key={beer._id}>
                                <img src={beer.image_url} alt={beer.name} />

                                <div className='beer-box'>
                                    <h3>{beer.name}</h3>
                                    <p>{beer.tagline}</p>
                                    <h5><b>Created by: {beer.contributed_by}</b></h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

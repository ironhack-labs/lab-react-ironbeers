import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BeerDetails.css';

export default class BeerDetails extends Component {

    state = {
        beer : null
    }

    getBeer = () => {
        const beerId = this.props.match.params.beerId;

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                this.setState({
                    beer: response.data
                })
            })
        
    }

    componentDidMount() {
        this.getBeer()
    }

    render() {
        if (!this.state.beer) return <></>;
        return (
            <>
                <header>
                    <Link to='/'>
                        <img src='/home-icon.png' alt='home-icon'/>
                    </Link>
                </header>
                
                <div className='beer-container'>
                    <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                    <div className='box'>
                        <div className='firstBox'>
                            <h2>{this.state.beer.name}</h2>
                            <h3>{this.state.beer.tagline}</h3>
                        </div>
                        <div className='secondBox'>
                            <h4>{this.state.beer.attenuation_level}</h4>
                            <h6>{this.state.beer.first_brewed}</h6>
                        </div>
                    </div>
                    <p>{this.state.beer.description}</p>
                    <h5>{this.state.beer.contributed_by}</h5>

                </div>
            </>
        )
    }
}

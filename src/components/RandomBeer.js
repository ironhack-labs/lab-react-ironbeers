import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Navbar from './Navbar'

export default class RandomBeer extends Component {
    state = {
        randomBeer : null
    }

    componentDidMount () {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((randomBeer) => {
            this.setState({
                randomBeer : randomBeer.data
            })
        })
    }
    render() {
        return (
            <>
            <Link className={"nav-link--home"} to={`/`}>Home</Link>
            <Navbar/>
            <div className={'card'}>
            {this.state.randomBeer 
                ? <div>
                    <h5 className={'card__title'}>{this.state.randomBeer.name} </h5>
                    <img src={this.state.randomBeer.image_url} alt="That's a good beer" className={'card__picture'}/>
                    <p className={'card__desc'}>{this.state.randomBeer.tagline}</p>
                    <div className={'card__desc'}>First brewed : {this.state.randomBeer.first_brewed}</div>
                    <div className={'card__desc'}>Attenuation level : {this.state.randomBeer.attenuation_level}</div>
                    <p className={'card__desc'}>Description : {this.state.randomBeer.description}</p>
                    <div className={'card__author'}>Contributed by : {this.state.randomBeer.contributed_by}</div>
                </div> 
                : "Still Brewing, wait a second"}
            </div>
            </>
        )
    }
}
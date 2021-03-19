import React, { Component } from 'react'
import OneBeer from './../components/OneBeer'

const axios = require('axios');

export default class RandomBeer extends Component {

    state = {beer: null}

    componentDidMount = async () => {
        try {
            const beer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random') ;
            this.setState({beer: beer})
        } catch(err) {
            console.log(err)
        }

    }

    render() {
        const {beer} = this.state ;
        return (
            <div>
                {beer && 
                    <OneBeer beer={beer.data}/>
                }
            </div>
        )
    }
}


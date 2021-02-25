import React from 'react';

import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers = () => this.api.get('/')
    getBeer = beerId => this.api.get(`/${beerId}`)
    getRandom = beerId => this.api.get(`/random`, beerId)
    saveBeer = beerDetails => this.api.post('/new', beerDetails)
}

export default BeersService
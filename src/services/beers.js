import React from 'react'
import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

const beerService = axios.create({ baseURL})

export const createBeer = beer => beerService.post('', beer)
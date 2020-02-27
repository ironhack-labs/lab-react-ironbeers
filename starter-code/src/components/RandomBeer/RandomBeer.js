import React, { Component } from 'react'
import BeersService from '../../services/beer.service'

export default class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {}
        this.services = new BeersService()
    }
    componentDidMount = () => this.getRandomBeer()


}
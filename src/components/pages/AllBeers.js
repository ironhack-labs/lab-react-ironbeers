import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BeerCard from './BeerCard'

export default class AllBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
    }

    getAllBeers() {

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((error) => console.log(error));
    }
    componentDidMount() {
    this.getAllBeers();
    }

    render() {
        
        return (
            <>
                {this.state.beers.map(elm => <Link className="list-group-item list-group-item-action" to={elm._id}><BeerCard key={elm._id}  {...elm}/></Link>)}
            </>
        )
    }
}

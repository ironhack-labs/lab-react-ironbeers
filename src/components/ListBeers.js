import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Header from './Header'

export default class ListBeers extends Component {
    
    state = {
        beers: [],
        search: ''
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => console.log(err))
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({
            search: event.target.value
        })
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => console.log(err))
    }
    
    render() {

        const beers = this.state.beers.map(beer => (
            <div key={beer._id}>
                <img src={beer.image_url} alt="" />
                <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
            </div>
        ))

        return (
            <div>
                <Header /> 
                <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search beer" />
                {beers}            
            </div>
        )
    }
}


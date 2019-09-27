import React, { Component } from 'react'
import axios from 'axios'
import BeersCard from './BeersCard'

export default class BeersContainer extends Component {
    state = {
        beers: []
    }
    
    getBeers = async() => {
        const response = await axios.get('http://ih-beer-api.herokuapp.com/beers')
        
        this.setState({beers : response.data})
    }

    componentDidMount(){
        this.getBeers()
    }

    render() {
        const {beers} = this.state
        return (
            <div className="columns is-centered">
                <div className="column is-half">
                    {beers.length === 0 && <div className="button is-danger is-loading">Loading</div>}
                    {beers.map((beer) => (
                        <BeersCard beerObject={beer} key={beer._id} />
                    ))}
                </div>
            </div>
        )
    }
}


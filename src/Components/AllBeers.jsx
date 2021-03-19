import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BeerRow from './BeerRow'
import '../Styles/AllBeers.css'

export class AllBeers extends Component {

    state = {
        beers: [],
        search: "",
        apiLoad: false
    }
    
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(res => this.setState(
            { beers: res.data, apiLoad: true}
        ))
        .catch(err => console.log(err))
    }

    componentDidUpdate() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
        .then(res => this.setState({beers: res.data}))
        .catch(err => console.log(err))
    }
    
    handleSearch = (event) => {
        this.setState({search: event.target.value})
    }

    render() {
        const {beers, apiLoad} = this.state

        if(beers.length === 0 && !apiLoad) { 
            return (
                <div className="Loader">
                    <p>Is loading...</p>
                </div>
            )
        }

        if(beers.length === 0 && apiLoad) {
            return (
                <div>
                    <input className="searchbar" type="text" value={this.state.search} onChange={this.handleSearch} placeholder="search your beer"/>

                    <div className="Loader"> 
                        <p>no results found</p>
                    </div>
                </div>
            )
        } 

        return (
            
            <div>
                <input className="searchbar" type="text" value={this.state.search} onChange={this.handleSearch} placeholder="search your beer"/>

                {beers.map(beer =>
                    <Link key={beer._id} to={`/beers/${beer._id}`} beer={beer} >
                        <BeerRow key={beer._id} beer={beer}/>
                    </Link>
                )}
            </div>
        )
    }
}

export default AllBeers

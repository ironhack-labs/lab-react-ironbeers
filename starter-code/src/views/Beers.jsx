import React, { Component } from 'react'
import HeaderToHome from '../components/HeaderToHome'
import axios from "axios"
import {Link } from 'react-router-dom'

export default class Beers extends Component {

    state = {
        beers: [],
        APIEndpoint:
        "https://ih-beers-api2.herokuapp.com/beers"
    }

    componentDidMount() {
        axios
        .get(this.state.APIEndpoint)
        .then(res => this.setState({beers: res.data}))
        .catch(err => console.log(err))
    }

    filterBeer = (value) => {
        axios
        .get(`${this.state.APIEndpoint}/search?q=${value}`)
        .then(res => this.setState({beers: res.data}))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="beers">
                <HeaderToHome />
                

                <div className="beersContainer">

                    <input className="searchBar" placeHolder="Search..." type="text" onChange={e => this.filterBeer(e.target.value)}/>

                    {this.state.beers.map(beer => (
                        <Link exact to={"/beers/"+beer._id} className="beerLink" key={beer._id}>
                            <div className="beerBox">
                                <div className="beerImg">
                                    <img src={beer.image_url} alt="beer"></img>
                                </div>
                                
                                <div className="beerIntro">
                                    <h2>{beer.name}</h2>
                                    <h3>{beer.tagline}</h3>
                                    <p><span>Created by: </span>{beer.contributed_by}</p>
                                </div>
                            </div>
                        </Link>
                        
                    ))}
                </div>

            </div>
        )
    }
}




import React, { Component } from 'react'
import axios from "axios"
import NavHome from '../styles/NavHome'
import {Link} from "react-router-dom"

export default class Detail extends Component {
    state = {
        beer : ""
    }

    async componentDidMount() {
        const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
        const beers = await axios.get(
            baseUrl
        )
        const {data} = beers
        const beer = data.find(beerFound => beerFound._id === this.props.match.params.id)
        this.setState({
            beer
        })
    }

    render() {
        return (
            <>  
                <Link to={"/"} style={{textDecoration: "none", color: "inherit"}}>
                    <NavHome>
                        <h1 style={{fontSize: "100px"}}>⌂</h1>
                    </NavHome>
                </Link>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img src={this.state.beer.image_url} alt="BeerImage" style={{width: "30vw"}}/>
                    <h2>{this.state.beer.name}</h2>
                    <h3>{this.state.beer.tagline}</h3>
                    <p>{this.state.beer.description}</p>
                    <p>{this.state.beer.contributed_by}</p>
                </div>
            </>
        )
    }
}

import React, { Component } from 'react'
import NavHome from '../styles/NavHome'
import {Link} from "react-router-dom"
import axios from "axios"
import BeerCard from '../styles/BeerCard'

export default class Beer extends Component {
    state = {
        beers : []
    }

    async componentDidMount() {
        const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
        const beers = await axios.get(
            baseUrl
        )
        const {data} = beers
        this.setState({
            beers: data
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
                    {this.state.beers.map((element, index) => (
                        <Link to={`/beers/${element._id}`} key={index} style={{textDecoration: "none", color: "inherit"}}>
                            <BeerCard style={{display: "flex", margin: "2vw 4vw"}}>
                                <div>
                                    <img src={element.image_url} alt="BeerImage" style={{height: "15vh"}}/>
                                </div>
                                <div style={{}}>
                                    <h3>{element.name}</h3>
                                    <h4>{element.tagline}</h4>
                                    <p>Created by: <span>{element.contributed_by}</span></p>
                                </div>
                            </BeerCard>
                        </Link>
                    ))}
            </>
        )
    }
}

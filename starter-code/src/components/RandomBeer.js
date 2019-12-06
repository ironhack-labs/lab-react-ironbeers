import React, { Component } from 'react'
import NavHome from '../styles/NavHome'
import {Link} from "react-router-dom"

export default class RandomBeer extends Component {
    render() {
        return (
            <>
                <Link to={"/"} style={{textDecoration: "none", color: "inherit"}}>
                    <NavHome>
                        <h1 style={{fontSize: "100px"}}>⌂</h1>
                    </NavHome>
                </Link>
            </>
        )
    }
}

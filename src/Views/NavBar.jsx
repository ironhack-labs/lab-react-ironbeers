import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import beerLogo from './../assets/beer.jpeg'

class NavBar extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'blue'}}>
                <Link to="/"><img style={{width:50, margin:20}} src={beerLogo} alt="beer-logo"/></Link>
            </div>
        )
    }
}

export default NavBar

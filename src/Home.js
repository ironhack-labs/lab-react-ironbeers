import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavBar from './Navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div>
                <Link to ='/beers'>
                    <img src ="" alt = "To all Beers"/>
                </Link>
                <h1>All Beers</h1>
                </div>
                <div>
                <Link to ='/random-beer'>
                    <img src ="" alt = "To Random Beer"/>
                </Link>
                <h1>Random Beer</h1>
                </div>
                <div>
                <Link to ='/new-beer'>
                    <img src ="" alt = "To add the beer"/>
                </Link>
                <h1>Add a Beer</h1>
                </div>

            </div>
        )
    }
}

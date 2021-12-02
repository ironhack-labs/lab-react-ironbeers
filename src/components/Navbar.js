import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dashboard from '../assets/dashboard.png'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                 <img src={dashboard}/>
                </Link>
            </div>
        )
    }
}

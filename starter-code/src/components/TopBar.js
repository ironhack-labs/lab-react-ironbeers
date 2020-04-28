
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ho from '../ho.png'

class TopBar extends Component {
    render() {
        return (

            <div className="tophome">
                <Link to="/">
                    <img alt="gohome" src={ho}></img>
                </Link>
            </div>
        )
    }
}

export default TopBar
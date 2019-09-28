import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <Link to="/">

            <div className="header">
                <img  height= "30px" src="/images/white-house.png" alt=""/>
            </div>
            </Link>
        )
    }
}

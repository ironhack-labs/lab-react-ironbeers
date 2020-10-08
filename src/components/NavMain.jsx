import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'

class NavMain extends Component {
    render() {
        return (
            <div>
                <NavLink exact to='/'>Home</NavLink>
            </div>
        )
    }
}

export default NavMain
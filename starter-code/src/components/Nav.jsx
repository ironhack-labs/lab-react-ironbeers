import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Link to ='/'>Home</Link>
                <Link to ='/signup'>Signup</Link>
                <Link to ='/login'>Login</Link>
                <Link to ='/profile'>Profile</Link>
                <Link to ='/logout'>Logout</Link>
            </div>
        )
    }
}

export default Nav;

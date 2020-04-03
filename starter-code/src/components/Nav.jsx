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
            </div>
        )
    }
}

export default Nav;

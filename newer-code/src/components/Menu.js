import React, { Component } from 'react'
import {Link} from  'react-router-dom';
export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                 <Link to='/' >
                Home
                </Link>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header><Link to='/'>Home</Link></header>
            </div>
        )
    }
}

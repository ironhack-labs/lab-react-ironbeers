import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Header.css'

export class Header extends Component {
    render() {
        return (<Link to="/" className="header"><i class="fas fa-house-user"></i></Link>)
    }
}

export default Header

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Header extends Component {
    constructor() {
        super()
        this.state = []
    }
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
            </div>
        );
    }
}
export default Header;
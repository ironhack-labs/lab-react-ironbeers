import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <div className="navbar bg-primary">
                <Link to="/"> <img src="https://image.flaticon.com/icons/svg/25/25694.svg" alt=""></img> </Link>
            </div>
        )
    }
}
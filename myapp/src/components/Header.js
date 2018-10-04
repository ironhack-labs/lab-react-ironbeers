import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <div className="navbar bg-info d-flex justify-content-center navbar-expand-lg">
                <Link to="/"> <img src="https://image.flaticon.com/icons/svg/25/25694.svg" alt="" style={{height:"8vh"}}></img> </Link>
            </div>
        )
    }
}
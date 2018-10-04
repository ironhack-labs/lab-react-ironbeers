import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            < div >
                <Link to="/">
                    <nav>
                        <img src="../beer-icon.png" alt="" />
                    </nav>
                </Link>
            </div >
        )
    }
}
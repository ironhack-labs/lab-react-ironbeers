import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div class="nav">
                <Link to={"/"}>
                    <header>
                        <i>❑</i>
                    </header>
                </Link>
            </div>
        )
    }
}
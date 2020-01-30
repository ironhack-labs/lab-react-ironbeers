import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <div>
                        <Link to="/"><img src="./images/header-house.png" alt="navbar"/></Link>
                    </div>
                </nav>

            </div>
        )
    }
}

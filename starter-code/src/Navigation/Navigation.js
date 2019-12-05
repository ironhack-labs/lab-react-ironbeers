import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navigation">
                <Link to="/"><img src="./favicon.ico"></img></Link>
                </nav>
            </React.Fragment>
        )
    }
}

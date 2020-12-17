import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/"> Homepage </Link>
            </div>
        )
    }
}
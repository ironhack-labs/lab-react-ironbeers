import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super();
    }
    render(){
        return (
            <header className="header" style={{ backgroundColor: '#33AFFF' }}>
            <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">IronBeers</span>
            <Router>
            <Link to='/'>Home</Link>
            </Router>
            </nav>
            </header>
        );
    };

}; 

export default Header;


import React, { Component } from 'react';
import { Link, withRouter } from  "react-router-dom";
import '../App.css';


class Nav extends Component {
    render() {
        console.log(this.props)
        return this.props.location.pathname === '/' ? (
            <nav className='App-header'>
                <Link to ='/' className='link-root'>
                    <img className='App-logo' src='/images/home-run.png'/>
                </Link>
            </nav>
        ) : null
    }
}

export default withRouter(Nav);
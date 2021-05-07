import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'


class Header extends Component {

    render() {
        return (

            <nav className='navbar navbar-blue bg-blue mb-3' >
                <div className='container'>
                    <h1 className='navbar-brand'><Link to='/'>IronBeers</Link></h1>
                </div>
            </nav>
        )
    }
}

export default Header
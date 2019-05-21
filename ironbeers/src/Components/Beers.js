import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

export default class Beers extends Component {
    render() {
        return (
            <div>
                <Header />
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

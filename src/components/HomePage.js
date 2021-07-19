import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to='/beers'>
                    <img src='/beers.png' alt='beers' width='100%'/>
                    <h3>All Beers</h3>
                </Link>
                <p>bla bla bla bla bla bla bla bla bla bla</p>

                <Link to='/random-beer'>
                    <img src='/random-beer.png' alt='random-beer' width='100%'/>
                    <h3>Random Beer</h3>
                </Link>
                <p>bla bla bla bla bla bla bla bla bla bla</p>

                <Link to='/new-beer'>
                <img src='/new-beer.png' alt='new-beer' width='100%'/>
                <h3>New Beer</h3>
                </Link>
                <p>bla bla bla bla bla bla bla bla bla bla</p>
            </div>
        )
    }
}

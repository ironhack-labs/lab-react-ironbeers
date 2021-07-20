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
                <p>Enter here to see the list of the Beers, and get all the information that you seek about them </p>

                <Link to='/random-beer'>
                    <img src='/random-beer.png' alt='random-beer' width='100%'/>
                    <h3>Random Beer</h3>
                </Link>
                <p>Get all the data about one random Beer.</p>

                <Link to='/new-beer'>
                    <img src='/new-beer.png' alt='new-beer' width='100%'/>
                    <h3>New Beer</h3>
                </Link>
                <p>Wanna create a new entry for a Beer? Enter here</p>
            </div>
        )
    }
}

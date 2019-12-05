import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className = 'homescreen'>
                <Link to = {'./allbeers'}>
                    <img src = '/images/beers.png' alt=''/>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius tincidunt metus, id condimentum felis hendrerit quis.</p>
                </Link>
                <Link to = {'./randombeer'}>
                    <img src = '/images/random-beer.png' alt=''/>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius tincidunt metus, id condimentum felis hendrerit quis.</p>
                </Link>
                <Link to = {'./newbeer'}>
                    <img src = '/images/new-beer.png' alt=''/>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius tincidunt metus, id condimentum felis hendrerit quis.</p>
                </Link>
            </div>
        )
    }
}

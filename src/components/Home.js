import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                <li>
                    <Link to="/Beers">Beer</Link>
                </li>
                <li>
                    <Link to="/RandomBeer">Random Beer</Link>
                </li>
                <li>
                    <Link to="/NewBeer">New Beer</Link>
                </li>
            </ul>
            </div>
        )
    }
}

import React, { Component } from 'react'
// import Header from "./Header"
// import Beers from "./Beers";
// import RandomBeer from "./RandomBeer";
// import NewBeer from "./NewBeer";
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <p><Link to="/beers">Beers</Link></p>
                <p><Link to="/random-beer">Random Beer</Link></p>
                <p><Link to="/new-beer">New Beer</Link></p>
            </div>
        )
    }
}

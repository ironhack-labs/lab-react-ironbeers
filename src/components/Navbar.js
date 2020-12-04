import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar">
                <Link to = "/">Go to homepage</Link>
                {/* <Link to= {`/beers/${beer_id}`}> All beers </Link> */}
                {/* <a href="/">Go to homepage</a> */}
            </div>
        )
    }
}

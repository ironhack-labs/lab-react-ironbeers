import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <div className='home-page'>
                <Link className='home-link' to='/beers'>All Beers</Link>
                <Link className='home-link' to='/random-beer'>Random beer</Link>
                <Link className='home-link' to='/new-beer'>New beer</Link>
            </div>
        )
    }
}

export default Home;
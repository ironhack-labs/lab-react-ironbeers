import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <div>
                <Link className='link' to='/beers'>All Beers</Link>
            </div>
        )
    }
}

export default Home;
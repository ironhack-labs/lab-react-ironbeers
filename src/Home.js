import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to = '/' >Home</Link>
                <br />
                <Link to = 'All-beers' >All bears</Link>
                <br />
                <Link to = 'Random-beer' >Random beer</Link>
                <br />
                <Link to = 'New-beer' >New beer</Link>
            </div>
        );
    }
}

export default Home;
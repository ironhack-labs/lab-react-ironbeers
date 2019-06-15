import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/beers' className='App-link'> All Beers </Link>
                    <Link to='/random-beer' className='App-link'> Random Beer </Link>
                        <Link to='/new-beer' className='App-link'> New Beer </Link>
            </div>
        );
    }
}

export default Home;
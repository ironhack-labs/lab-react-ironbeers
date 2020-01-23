import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
    render() {
        return (
            <div>
                       <Link to='/'> <Header /></Link>
            </div>
        )
    }
}

export default RandomBeer;
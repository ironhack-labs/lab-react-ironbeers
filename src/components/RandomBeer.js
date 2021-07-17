import React, { Component } from 'react';
import MyNav from './MyNav';

class RandomBeer extends Component {
    render() {
        return (
            <div>
                <MyNav />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        )
    }
}

export default RandomBeer
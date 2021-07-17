import React, { Component } from 'react';
import MyNav from './MyNav';

class NewBeer extends Component {
    render() {
        return (
            <div>
                <MyNav />
                <h1>New Beer hi</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        )
    }
}

export default NewBeer;
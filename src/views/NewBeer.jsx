import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { newBeer } from './../services/beers-api';

class NewBeer extends Component {
    render() {
        return (
            <div>
                <h1>Add a new beer</h1>
            </div>
        )
    }
}

export default NewBeer;
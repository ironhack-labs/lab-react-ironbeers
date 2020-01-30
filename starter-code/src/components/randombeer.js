import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class randombeer extends Component {
    render() {
        return (
            <div>
                <h1>Random Beer</h1>
                <Link to='/'>Back to Main Page</Link>
            </div>
        )
    }
}

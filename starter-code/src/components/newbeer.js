import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class newbeer extends Component {
    render() {
        return (
            <div>
                <h1>New Beer</h1>
                <Link to='/'>Back to Main Page</Link>
            </div>
        )
    }
}

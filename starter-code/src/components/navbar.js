import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            <div className="sticky-top">
                <Link to={'/'} className='list-group-item list-group-item-action active'>Home</Link>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListBeers extends Component {


    render() {
        return (
            <div>
                <header>
                <Link to={'/'}>Back to Home</Link>
                </header>
            </div>
        );
    }
}

export default ListBeers;
import React, { Component } from 'react';
import axios from 'axios';

class BeerFilter extends Component {
    constructor(props) {
        super(props)

    }

    handleChange = (event) => {
        this.props.search(event.target.value)
    }

    render() {
        return (
            <div className="container">
                <div className="m-10">
                    <input className="input is-rounded" placeholder="Search for a Beer!" onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default BeerFilter;

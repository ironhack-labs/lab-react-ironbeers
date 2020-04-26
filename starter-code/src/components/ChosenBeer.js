import React, { Component } from 'react';
import SingleBeer from './SingleBeer';

class ChosenBeer extends Component {
    render() {
        return (
            <div>
                <SingleBeer beer={this.props.location.state.beer} />
            </div>
        );
    }
}

export default ChosenBeer;
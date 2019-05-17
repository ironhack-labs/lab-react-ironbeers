import React, { Component, Fragment } from 'react';
import BeerBox from './BeerBox';

class Beers extends Component {

    state = {
        beers: this.props.beers
    }



    render() {
        return (
            <Fragment>
                <BeerBox beers={this.state.beers} />
            </Fragment>


        );
    }
}

export default Beers;

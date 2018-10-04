import React, { Component } from 'react';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

export default class HomePage extends Component {
    render() {
        return(
            <div>
                <Beers/>
                <RandomBeer></RandomBeer>
                <NewBeer></NewBeer>
            </div>
        )
    }
}
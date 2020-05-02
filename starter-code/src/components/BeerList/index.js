import React, { Component } from 'react';
import BeerCard from '../BeerCard';

class BeerList extends Component {
    render() {
        return(
            <div>
                <BeerCard image="https://images.punkapi.com/v2/4.png" name="Some Beer" tagline="The best beer ever" contributor="John Sena"  />
            </div>
        )
    }
}

export default BeerList
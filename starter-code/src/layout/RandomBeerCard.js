import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RandomBeerCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="homepage random-beer-card">
                <Link to="/beers/random">
                    <img src="../images/random-beer.png"></img>
                    <h2>Random Beer</h2>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit augue, condimentum eu dictum in, malesuada vitae arcu. Pellentesque vestibulum enim mauris, a blandit erat tempor sed. Vestibulum non felis.</p>
                </div>
        )
    }
}

export default RandomBeerCard

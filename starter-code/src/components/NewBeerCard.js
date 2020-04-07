import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeerCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="homepage new-beer-card">
                <Link to="/beers/new">
                    <img src="../images/new-beer.png"></img>
                    <h2>New Beer</h2>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit augue, condimentum eu dictum in, malesuada vitae arcu. Pellentesque vestibulum enim mauris, a blandit erat tempor sed. Vestibulum non felis.</p>
            </div>
        )
    }
}

export default NewBeerCard

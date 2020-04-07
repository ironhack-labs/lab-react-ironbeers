import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AllBeersCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="homepage all-beers-card">
                <Link to="/beers/all">
                    <img src="../images/beers.png"></img>
                    <h2>All Beers</h2>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit augue, condimentum eu dictum in, malesuada vitae arcu. Pellentesque vestibulum enim mauris, a blandit erat tempor sed. Vestibulum non felis.</p>
            </div>
        )
    }
}

export default AllBeersCard

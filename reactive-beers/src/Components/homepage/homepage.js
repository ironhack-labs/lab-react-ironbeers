import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Link to="/beers">All Beers</Link> <br/>
                <Link to="/random-beers">Random Beers</Link><br/>
                <Link to="/new-beers">New Beers</Link><br/>
                {/* <Link to="/beers/:id">Each Beer</Link><br/> */}
            </div>
        );
    }
}

export default Homepage;
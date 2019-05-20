import React from 'react';
import { Link, NavLink } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <ul>
                    <li><NavLink to="/beers"><div><img src="./img/beers.png" /><h1>All Beers</h1></div></NavLink></li>
                    <li><NavLink to="/random-beer"><div><img src="./img/random-beer.png"  /><h1>Random Beer</h1></div></NavLink></li>
                    <li><NavLink to="/new-beer"><div><img src="./img/new-beer.png" /><h1>New Beer</h1></div></NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Home;



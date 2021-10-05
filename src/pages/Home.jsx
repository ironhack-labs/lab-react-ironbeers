import React from 'react';
import { Link } from 'react-router-dom'



class Home extends React.Component {
    render() {
        return (
            <nav className="nav-style">
                <ul className="NavBar">
                    <li><Link to='/beers'>All Beers</Link></li>
                    <li><Link to='/new-beer'>New Beer</Link></li>
                    <li><Link to='/random-beer'>Random Beer</Link></li>
                </ul>
           </nav>
        )

    }
}

export default Home

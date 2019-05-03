import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><Link to='/allbeers'>All Beers</Link></li>
                    <li><Link to='/randombeer'>Random Beer</Link></li>
                    <li><Link to='/newbeer'>New Beer</Link></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Home;

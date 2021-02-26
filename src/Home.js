import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <>
            <div>
            <h2><Link to='/beers'>All Beers</Link></h2>
            </div>
            <div>
            <h2><Link to='/random-beer'>Random Beer</Link></h2>
            </div>
            <div>
            <h2><Link to='/new-beer'>New Beer</Link></h2>
            </div>
            </>
        )
    }
}

import React from 'react';
import CompAll from './CompAll';
import CompRandom from './CompRandom';
import CompNew from './CompNew';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }
    render() {
        return (
        <div className="Home">
            <p>Home</p>
            <div><Link to='/beers'>All Beers</Link></div>
            <div><Link to='/random-beer'>Random Beer</Link></div>
            <div><Link to='/new-beer'>New Beer</Link></div>
        </div>
        )
    }
}

export default Home;

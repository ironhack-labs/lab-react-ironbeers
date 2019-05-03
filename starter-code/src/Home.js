import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

class Home extends React.Component {
  render() {
    return (
      <div className="container-links">
        <Link to='/beers'>All Beers</Link>
        <Link to='/random-beer'>Random beer</Link>
        <Link to='/new-beer'>New beer</Link>
      </div>
    )
  }
}

export default Home;

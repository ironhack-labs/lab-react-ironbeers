import React from 'react';
import Home from './CompHome';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {
  constructor(props) {
    super(props);

  }
    render() {
        console.log("All beers");
        return (
          <div classname="AllBeers">
            <div><Link to='/'>Home</Link></div>
            AllBeers
          </div>
        )
    }
}

export default AllBeers;
import React, {Component} from 'react';
import SectionHome from './SectionHome';
import SearchBeer from './SearchBeer';
import { Link } from "react-router-dom";

class Homepage extends Component {
  render(){
    return (
      <div>
        <Link to='/beers'>
          <SectionHome img="/images/beers.png" title="All Beers" />
        </Link>
        <Link to='/random-beer'>
          <SectionHome img="/images/random-beer.png" title="Random Beer" />
        </Link>
        <Link to='/new-beer'>
          <SectionHome img="/images/new-beer.png" title="New Beer" />
        </Link>
      </div>
    )
  }
}

export default Homepage; 
import React from "react";
import Header from './Header';
import {Link} from 'react-router-dom';

const homePage = () => {
  return (
    <div>
      <h1><Link to={'/beers'}>All Beers</Link></h1>
      <h1><Link to={'/beers/random'}>Random Beer</Link></h1>
      <h1>New Beer</h1>
    </div>
  );
};

export default homePage;

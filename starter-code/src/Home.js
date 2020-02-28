import React from "react";
import {Link} from 'react-router-dom';
// import AllBeers from './AllBeers';


export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="AllBeers">
          <img src="images/beers.png" alt="" />
          <h2><Link to="/allbeers">All Beers</Link></h2>
          <p></p>
        </div>
        <div className="RandomBeer">
          <img src="images/random-beer.png" alt="" />
          <h2><Link to="/randombeer">Random beer</Link></h2>
          <p></p>
        </div>
        <div className="AnyBeer">
          <img src="images/new-beer.png" alt="" />
          <h2><Link to="/newbeer">New Beer</Link></h2>
          <p></p>
        </div>
      </div>
    );
  }
}

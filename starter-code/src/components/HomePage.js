import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HomePage extends Component {
    render() {
      return (

  //IT.1
    <div>    
        <div>
        <img src="/images/beers.png"/>
        <Link to="/beers">All beers</Link>
        <p>Birris todas</p>
        </div>

        <div>
        <img src="/images/random-beer.png"/>
        <Link to="/beers/random">Random beer</Link>
        <p>Birris random</p>
        </div>

         <div>
         <img src="/images/new-beer.png"/>
         <Link to="/beers/new">New beer</Link>
         <p>Birris nuevas</p>
       </div>
    </div>
      );
    }
  }

  export default HomePage
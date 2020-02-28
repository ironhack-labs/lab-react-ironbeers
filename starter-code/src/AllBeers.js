import React from "react";
// import {Link} from 'react-router-dom';
import AnyBeer from "./AnyBeer";
import NavBar from "./NavBar";

export default class AllBeers extends React.Component {
  render() {
    let arr = this.props.allBeers;
    return (
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        <body>
        {arr.map((beer, idx) => (
          <AnyBeer
            key={idx}
            image_url={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed_by={beer.contributed_by}
          ></AnyBeer>
        ))}
        </body>
      </div>
    );
  }
}

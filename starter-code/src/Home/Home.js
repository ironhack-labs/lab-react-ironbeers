import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";


export default class Home extends React.Component {
  render() {
    return (
      <section className="Home">
        <Link to={"/beers"}>
          <img src="./images/beers.png" alt="All Beers"/>
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores quos optio cum sequi distinctio magnam officiis voluptates alias, explicabo, hic incidunt quibusdam eligendi non. Facere reprehenderit perferendis molestias minima.</p>
        </Link>
        <Link to={"/randombeer"}>
          <img src="./images/random-beer.png" alt="Random Beer"/>
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores quos optio cum sequi distinctio magnam officiis voluptates alias, explicabo, hic incidunt quibusdam eligendi non. Facere reprehenderit perferendis molestias minima.</p>
        </Link>
        <Link to={"/newbeer"}>
          <img src="./images/new-beer.png" alt="New Beer"/>
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores quos optio cum sequi distinctio magnam officiis voluptates alias, explicabo, hic incidunt quibusdam eligendi non. Facere reprehenderit perferendis molestias minima.</p>
        </Link>
      </section>
    );
  }
}
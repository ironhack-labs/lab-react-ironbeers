import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>Home View</h1>
        <div>
          <Link to="/beers">
            <img src="./../images/beers.png" alt="1" />
            <h1>All beers</h1>
          </Link>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              excepturi error adipisci consectetur, consequatur, cupiditate
              consequuntur accusantium magni vel quaerat tempora, possimus
              maiores minima aliquid. Ab aspernatur officiis cupiditate at!
            </p>
        </div>
        <div>
          <Link to="/random-beer">
            <img src="./../images/random-beer.png" alt="2" />
            <h1>Random beer</h1>
          </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              natus, in deleniti ipsam rerum autem maiores perspiciatis magni
              amet impedit cum culpa quam aliquam. Culpa distinctio
              reprehenderit beatae accusantium quis.
            </p>
        </div>
        <div>
          <Link to="/new-beer">
            <img src="./../images/new-beer.png" alt="3" />
            <h1>New beer</h1>
          </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis
              doloremque assumenda eaque consectetur, sint atque velit quibusdam
              voluptates! Veritatis quos provident qui quod molestiae
              reprehenderit, quisquam id non molestias.
            </p>
        </div>
      </div>
    );
  }
}

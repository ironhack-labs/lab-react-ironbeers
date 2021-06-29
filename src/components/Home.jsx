import React, { Component } from 'react';
import Beers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png';
import NewBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-4xl">IronBeers</h1>
        <Link to="/beers">
          <img src={Beers} alt="beer__img"></img>
          <h1 className=" text-3xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600>Beers">
            All Beers
          </h1>
          <p>
            Excepteur minim mollit fugiat culpa sint veniam qui proident
            proident. Commodo cillum ea irure nostrud laboris velit exercitation
            pariatur dolore. Quis proident commodo qui sint duis id ad do nisi
            occaecat nostrud.
          </p>
        </Link>

        <Link to="/random-beer">
          <img src={RandomBeer} alt="random__beer"></img>
          <h1 className="text-3xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600>Beers">
            Random Beer
          </h1>
          <p>
            Exercitation deserunt adipisicing labore laborum tempor dolore
            ullamco id elit aliquip pariatur ullamco adipisicing reprehenderit.
            Do exercitation eiusmod sit dolor officia veniam reprehenderit. Ut
            elit eiusmod velit ad.
          </p>
        </Link>

        <Link to="/new-beer">
          <img src={NewBeer} alt="new__beer"></img>
          <h1 className=" text-3xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600>Beers">
            New Beer
          </h1>
          <p>
            Dolor nostrud sunt fugiat Lorem amet dolor do sit laboris. Eu
            deserunt sunt excepteur dolore in elit officia ex aute proident
            laboris aute eu. Lorem cupidatat non sint laborum culpa sunt.
          </p>
        </Link>
      </div>
    );
  }
}

export default Home;

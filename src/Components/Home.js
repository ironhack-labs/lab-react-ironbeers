import React from 'react';
import '../App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import AllBeersPhoto from '../assets/beers.png';
import RandomBeerPhoto from '../assets/random-beer.png';
import NewBeerPhoto from '../assets/new-beer.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div>
          <Link to='/beers/allbeers'>
            <img src={AllBeersPhoto} alt={this.src} />
            <h1>All Beers</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            illum quasi asperiores, porro eaque sit voluptatum eligendi
            perspiciatis sunt voluptates voluptatibus ipsum deserunt in, placeat
            praesentium optio esse. Itaque, quibusdam?
          </p>
        </div>

        <div>
          <Link to='/beers/randombeer'>
            <img src={RandomBeerPhoto} alt="" />
            <h1>Random Beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            illum quasi asperiores, porro eaque sit voluptatum eligendi
            perspiciatis sunt voluptates voluptatibus ipsum deserunt in, placeat
            praesentium optio esse. Itaque, quibusdam?
          </p>
        </div>

        <div>
          <Link to='/beers/newbeer'>
            <img src={NewBeerPhoto} alt="" />
            <h1>New Beers</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            illum quasi asperiores, porro eaque sit voluptatum eligendi
            perspiciatis sunt voluptates voluptatibus ipsum deserunt in, placeat
            praesentium optio esse. Itaque, quibusdam?
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

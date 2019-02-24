import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Iron Beers</h1>
        <Link to='/allBeers'>
          <h3>All beers</h3>
          <img src="https://images-na.ssl-images-amazon.com/images/I/8115UueeAeL._SX679_.jpg" alt='' />
        </Link>
        <Link to='/randomBeer'>
          <h3>Random Beer</h3>
          <img src="https://dydza6t6xitx6.cloudfront.net/ci-stella-artois-f4762eb0a31c5839.jpeg" alt='' />
        </Link>
        <Link to='/newBeer'>
          <h3>New Beer</h3>
          <img src="https://www.shape.com/sites/shape.com/files/styles/slide/public/bud-light-bikini-beer.jpg" alt='' />
        </Link>
      </div>
    </div>
  )
}

export default Home;
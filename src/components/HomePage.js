import { Link } from 'react-router-dom';
import classes from './HomePage.module.css';

import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Link to="/beers">
        <img src={allBeers} alt="All Beers" />
        <h2 className={classes.heading}>All Beers</h2>
        <p className={classes.text}>blablabla</p>
      </Link>
      <Link to="random-beer">
        <img src={randomBeer} alt="Random Beer" />
        <h2 className={classes.heading}>Random Beer</h2>
        <p className={classes.text}>blablabla</p>
      </Link>
      <Link to="new-beer">
        <img src={newBeer} alt="New Beer" />
        <h2 className={classes.heading}>New Beer</h2>
        <p className={classes.text}> blablabla</p>
      </Link>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import bar from '/Users/andreialvarez/Desktop/Ironhack-Andrei/Module-3/lab-react-ironbeers/src/images/bar.jpg';
import cheers from '/Users/andreialvarez/Desktop/Ironhack-Andrei/Module-3/lab-react-ironbeers/src/images/cheers.jpg';
import glassOfBeer from '/Users/andreialvarez/Desktop/Ironhack-Andrei/Module-3/lab-react-ironbeers/src/images/glassOfBeer.jpg';

export default function HomePage() {
  return (
    <div>
      <article>
        <img className="beerHome" src={bar} alt="All Beers"></img>
        <Link to="/beers">
          <h2>All Beers</h2>
        </Link>
        <p>
          Since beer is one of the most consumed drinks between Ironhackers,
          here you have an app to showcase some of the best-handcrafted beers.{' '}
        </p>
      </article>
      <article>
        <img className="beerHome" src={cheers} alt="Random Beer"></img>
        <Link to="/randomBeer">
          <h2>Random Beer</h2>
        </Link>
        <p>Let the app choose a beer for you. </p>
      </article>
      <article>
        <img className="beerHome" src={glassOfBeer} alt="New Beer"></img>
        <Link to="/newBeer">
          <h2>New Beer</h2>
        </Link>
        <p>Add new beers to our app. </p>
      </article>
    </div>
  );
}

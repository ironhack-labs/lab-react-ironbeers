import { Link } from 'react-router-dom';
import React from 'react';
import firstImage from '../../src/assets/beers.png'
import secondImage from '../../src/assets/new-beer.png';
import thirdImage from '../../src/assets/random-beer.png';


function Home() {
    return (
      <div>
        <div>
          <img src={firstImage} /> <br />
          <Link to={'/beers'}>All beers</Link>
          <p>Lorem ipsum me gusta mucho ou yeah macarena ah ah</p>
        </div>
        <div>
          <img src={thirdImage} />
          <br />
          <Link to={'/random'}>Random Beer</Link>
          <p>Lorem ipsum me gusta mucho ou yeah macarena ah ah</p>
        </div>
        <div>
          <img src={secondImage} />
          <br />
          <Link to={'/new'}>Create new</Link>
          <p>Lorem ipsum me gusta mucho ou yeah macarena ah ah</p>
        </div>
      </div>
    );
}

export default Home

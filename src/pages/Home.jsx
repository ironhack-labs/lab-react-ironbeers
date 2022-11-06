import React from "react";
import { Link } from "react-router-dom";
import ImageBeers from '../assets/beers.png'
import ImageRandom from '../assets/random-beer.png'
import ImageNewBeer from '../assets/new-beer.png'

function Home() {
  return (
    <div className="home">
      <Link to="/beers" className="linkList">
        <div className="sectionList">
          <img src={ImageBeers}/>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>

      <Link to="/random-beer" className="linkList">
        <div className="sectionList">
          <img src={ImageRandom} />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>

      <Link to="/new-beer" className="linkList">
        <div className="sectionList">
          <img src={ImageNewBeer} />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Home;

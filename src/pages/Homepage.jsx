
import React from "react";

import BeersImage from '../assets/beers.png';
import RandomBeerImage from '../assets/random-beer.png'
import NewBeerImage from '../assets/new-beer.png'
import { Link } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import BeerDetails from "./BeerDetails";
import Beers from './Beers';



function Homepage() {
  return (
    <div>
      <div>
        <Link to={`/beers`}><section className="All-Beers-section">
          <div>
            <img src={BeersImage} alt="" className="HomepageImage" />
          </div>

          <div  className="text-section">
            <h2 className="homepage-h2">All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              labore, amet hic praesentium nostrum est distinctio eos non
              similique quia sunt enim atque placeat iusto. Facere sequi placeat
              ab consequatur!
            </p>
          </div>
        </section></Link>

        <Link to={`/RandomBeer`}><section className="Random-Beer-section">
          <div>
            <img src={RandomBeerImage} alt="" className="HomepageImage" />
          </div>

          <div className="text-section">
            <h2 className="homepage-h2">Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              labore, amet hic praesentium nostrum est distinctio eos non
              similique quia sunt enim atque placeat iusto. Facere sequi placeat
              ab consequatur!
            </p>
          </div>
        </section></Link>

        <Link to={`/NewBeer`}><section className="New-Beer-section">
          <div>
            <img src={NewBeerImage} alt="" className="HomepageImage" />
          </div>

          <div  className="text-section">
            <h2 className="homepage-h2">New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              labore, amet hic praesentium nostrum est distinctio eos non
              similique quia sunt enim atque placeat iusto. Facere sequi placeat
              ab consequatur!
            </p>
          </div>
        </section></Link>
      </div>
    </div>
  );
}

export default Homepage;

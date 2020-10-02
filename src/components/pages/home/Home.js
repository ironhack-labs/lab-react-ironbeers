import React from 'react';
import './home.css';
import beer1 from './images/beer1.jpeg';
import beer2 from './images/images.jpeg';
import beer3 from './images/beer3.jpeg';

import { Switch, Route, Redirect, Router, Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <section className="home">
        <article>
          <Link to="/beers">
            <img className="beer" src={beer1}></img>
            <h2>All beers</h2>
          </Link>
          <p>
            sldkfjlaskdjflksadjflkasjdflkasjdflkso djflskdjf sldkjfs sldkfjsdf
            ksdjlaksdj sijeo
          </p>
        </article>
        <article>
          <Link to="/random-beer">
            <img className="beer" src={beer2}></img>
            <h2>Random Beer</h2>
          </Link>
          <p>
            sldkfjlaskdjflksadjflkasjdflkasjdflkso djflskdjf sldkjfs sldkfjsdf
            ksdjlaksdj sijeo
          </p>
        </article>
        <article>
          <Link to="/new-beer">
            <img className="beer" src={beer3}></img>
            <h2>New Beer</h2>
          </Link>
          <p>
            sldkfjlaskdjflksadjflkasjdflkasjdflkso djflskdjf sldkjfs sldkfjsdf
            ksdjlaksdj sijeo
          </p>
        </article>
      </section>
    </>
  );
}

export default Home;

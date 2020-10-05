import React from 'react';
import './Home.css';
import { Route, Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <Route>
        <section>
          <img className="homeImg" src="/beers.png" alt="beers" />
          <div className="beer">
            <Link className="heading" to="/beers">
              All Beers
            </Link>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </section>
        <section>
          <img className="homeImg" src="/random-beer.png" alt="beer taps" />
          <div className="beer">
            <Link className="heading" to="/random-beer">
              Random Beer
            </Link>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </section>
        <section>
          <img className="homeImg" src="/new-beer.png" alt="beer pint" />
          <div className="beer">
            <Link className="heading" to="/new-beer">
              New Beer
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </section>
      </Route>
    </div>
  );
}

export default Home;

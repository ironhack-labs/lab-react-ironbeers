import React from 'react';
import { Route, Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Route>
        <Link to="beers">
          <img src="./images/beers.png" alt="beers"></img>
          <div className="container">
            <h3>All beers</h3>
            <p style={{fontSize:'0.8em'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere condimentum ante, id venenatis nisi consequat eget. Ut in
              porta sem. Sed eu nulla facilisis, congue ipsum eu, posuere dui.
              Integer id porttitor orci. 
            </p>
          </div>
        </Link>
      </Route>
      <Route>
        <Link to="random-beer">
          <img src="./images/random-beer.png" alt="random-beer"></img>
          <div className="container">
            <h3>Random Beer</h3>
            <p style={{fontSize:'0.8em'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              iaculis enim augue, quis porttitor neque ultrices eget. Nullam
              eleifend commodo nibh at fermentum. Aliquam maximus tellus sit
              amet massa placerat sodales.
            </p>
          </div>
        </Link>
      </Route>
      <Route>
        <Link to="new-beer">
          <img src="./images/new-beer.png" alt="new-beer"></img>
          <div className='container'>
            <h3>New Beer</h3>
            <p style={{fontSize:'0.8em'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              interdum in dui non consequat. Sed sed eros pharetra, mollis erat
              quis, ornare massa. Phasellus molestie ac sapien a iaculis.
            </p>
          </div>
        </Link>
      </Route>
    </>
  );
}

export default Home;

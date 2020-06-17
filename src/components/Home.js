import React from 'react';

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="jumbotron-fluid text-center">
        <h1 className="display-4 pt-5">React Lab: IronBeers</h1>
        <p className="display-5 pb-5">Calling beer APIs in React</p>
      </div>
      <div className="card my-3" style={{ width: '400px' }}>
        <a href="/beers">
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + '/images/beers.png'}
            alt="beers"
          />
        </a>
        <div className="card-body">
          <a href="/beers">
            <h5 className="card-title">All Beers</h5>
          </a>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            corrupti.
          </p>
        </div>
      </div>

      <div className="card my-3" style={{ width: '400px' }}>
        <a href="/random-beer">
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + '/images/random-beer.png'}
            alt="random-beer"
          />
        </a>
        <div className="card-body">
          <a href="/random-beer">
            <h5 className="card-title">Random Beer</h5>
          </a>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            corrupti.
          </p>
        </div>
      </div>

      <div className="card my-3" style={{ width: '400px' }}>
        <a href="/new-beer">
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + '/images/new-beer.png'}
            alt="new-beer"
          />
        </a>
        <div className="card-body">
          <a href="/new-beer">
            <h5 className="card-title">New Beer</h5>
          </a>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            corrupti.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

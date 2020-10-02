import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="position-relative p-3 p-md-5 m-md-3 text-center bg-all-beers">
        <div className="col-md-5 py-lg-5 p-lg-3 mx-auto mt-2 mb-5">
          <h1 className="display-4 font-weight-normal text-white">All beers</h1>
          <p className="lead font-weight-normal text-white">
            Dare to know the best selection of beers from IronHack.
          </p>
          <Link className="btn btn-secondary btn-lg" to="/beers">
            See now
          </Link>
        </div>
      </div>

      <div className="d-flex my-md-3 pl-md-3">
        <div className="col mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-md-right text-white bg-random-beer">
          <div className="my-3 py-3">
            <h2 className="display-5">Random Beer</h2>
            <p className="lead">
              Can't decide? <br />
              Let us select your beer for you.
            </p>
            <Link className="btn btn-warning btn-lg" to="/random-beer">
              Give me one please
            </Link>
          </div>
        </div>
        <div className="col mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-md-left text-white bg-new-beer">
          <div className="my-3 p-3">
            <h2 className="display-5">New Beer</h2>
            <p className="lead">
              Can't find yours?. <br />
              Upload it now!.
            </p>
            <Link className="btn btn-light btn-lg" to="/new-beer">
              Go! Go! Go!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

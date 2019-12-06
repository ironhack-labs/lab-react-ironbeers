import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <h1>Beer Homepage</h1>
        <h2>
          Hi, I'm <del>Web Developer!</del> Beer addicted !
        </h2>
        <div className="container text-left">
          <img
            src="../../images/beers.png"
            className="d-block w-100"
            alt=""
          ></img>
          <Link to="/beer">
            <h1 className="display-4">Beer list</h1>
          </Link>
          <p className="lead">
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div className="container text-left">
          <img
            src="../../images/random-beer.png"
            className="d-block w-100"
            alt=""
          ></img>
          <Link to="/beer">
            <h1 className="display-4">Random Beer</h1>
          </Link>
          <p className="lead">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."{" "}
          </p>
        </div>

        <div className="container text-left">
          <img
            src="../../images/new-beer.png"
            className="d-block w-100"
            alt=""
          ></img>
          <Link to="/NewBeer">
            <h1 className="display-4">New Beer</h1>
          </Link>
          <p className="lead">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default home;



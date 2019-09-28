import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="home">
      <div className="section-content">
        <img src="/images/beers.png" alt="" />
        <Link to="/list-beers">
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est possimus error reprehenderit amet impedit autem deleniti vel numquam dolore similique.
        </p>
      </div>

      <div className="section-content">
        <img src="/images/random-beer.png" alt="" />
        <Link to="/random-beer">
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est possimus error reprehenderit amet impedit autem deleniti vel numquam dolore similique.
        </p>
      </div>

      <div className="section-content">
        <img src="/images/new-beer.png" alt="" />
        <Link to="/new-beer">
          <h2>Single Beer</h2>
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est possimus error reprehenderit amet impedit autem deleniti vel numquam dolore similique.
        </p>
      </div>
    </div>
  );
};

export default Home;

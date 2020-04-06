import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <div className="text-left row d-flex flex-nowrap flex-column">
	  <Link to='/beers'>
        <div className="">
          <img className="img-fluid pb-2" src="/images/beers.png" alt="all beers" />
          <h2 className="px-3">All Beers</h2>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eum praesentium fuga deserunt mollitia reprehenderit quas porro
            consequuntur autem laudantium.
          </p>
        </div>
		</Link>
		<Link to='/random-beer'>
        <div className="">
          <img
            className="img-fluid pb-2"
            src="/images/random-beer.png"
            alt="all beers"
          />
          <h2 className="px-3">Random Beers</h2>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eum praesentium fuga deserunt mollitia reprehenderit quas porro
            consequuntur autem laudantium.
          </p>
        </div>
		</Link>
		<Link to='/new-beer'>
        <div className="">
          <img
            className="img-fluid pb-2"
            src="/images/new-beer.png"
            alt="all beers"
          />
          <h2 className="px-3">New Beer</h2>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eum praesentium fuga deserunt mollitia reprehenderit quas porro
            consequuntur autem laudantium.
          </p>
        </div>
		</Link>
      </div>
    </div>
  );
};

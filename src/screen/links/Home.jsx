import React from "react";
import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";

function home() {
  return (
    <>
      <h1 className="text-center m-5"> BEERS</h1>
      <div className="text-center d-flex">
        <div className="m-3">
          <h3>All Beers</h3>
          <Link to="/beers">
            <img
              src={beers}
              alt="beers"
              style={{
                width: 400,
              }}
              className="m-2"
            />
          </Link>
          <p>
            Sed augue lacus, viverra vitae congue. Volutpat maecenas volutpat
            blandit aliquam etiam erat velit, scelerisque in dictum non,
            consectetur a erat nam at lectus urna duis convallis convallis
            tellus, id!
          </p>
        </div>
        <div className="m-3">
          <h3>Random Beer</h3>
          <Link to="/random-beer">
            <img
              src={randomBeer}
              alt="randomBeer"
              style={{
                width: 400,
              }}
              className="m-2"
            />
          </Link>
          <p>
            Aliquet nibh praesent tristique magna sit amet purus gravida quis
            blandit turpis cursus in? Nulla facilisi cras fermentum, odio eu
            feugiat pretium, nibh ipsum consequat nisl, vel pretium lectus quam!
          </p>
        </div>
        <div className="m-3">
          <h3>New Beer</h3>
          <Link to="/new-beer">
            <img
              src={newBeer}
              alt="newBeer"
              style={{
                width: 400,
              }}
              className="m-2"
            />
          </Link>
          <p>
            Donec pretium vulputate sapien nec sagittis aliquam! Quis risus sed
            vulputate odio ut enim blandit volutpat maecenas volutpat blandit
            aliquam etiam erat velit, scelerisque in dictum non, consectetur a
            erat.
          </p>
        </div>
      </div>
    </>
  );
}

export default home;

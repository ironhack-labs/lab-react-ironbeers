import React from "react";
import { NavLink } from "react-router-dom";
import {randomBeer} from "../services/beerList"

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              width: "80%"
            }}
          >
            <img src="/images/beers.png" alt="beer" />
            <div>
              <NavLink to="/beers">Beer </NavLink>
              <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet eros eget elit consectetur consectetur. Suspendisse rhoncus dictum faucibus. Donec mollis lorem eu tellus tincidunt, id eleifend massa volutpat.
              </article>
            </div>
          </div>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              width: "80%"
            }}
          >
            <img src="/images/random-beer.png" alt="random beer" />
            <div>
            <NavLink to="/random-beer">Random Beer</NavLink>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet eros eget elit consectetur consectetur. Suspendisse rhoncus dictum faucibus. Donec mollis lorem eu tellus tincidunt, id eleifend massa volutpat.
              </article>
            </div>
          </div>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              width: "80%"
            }}
          >
            <img src="/images/new-beer.png" alt="new beer" />
            <div>
            <NavLink to="/beers/create">New Beer </NavLink>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet eros eget elit consectetur consectetur. Suspendisse rhoncus dictum faucibus. Donec mollis lorem eu tellus tincidunt, id eleifend massa volutpat.
              </article>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Home;

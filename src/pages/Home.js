import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import BeersPage from "./Beers";
import imageAllBeers from "../assets/beers.png";
import imagerandom from "../assets/random-beer.png";
import imagenewbeer from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/beers"}>
        <div className="card">
          <img src={imageAllBeers} alt="beers image" className="img" />
          <h3>All Beers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tincidunt justo et ultrices. Duis non rhoncus augue, a
            egestas arcu. Etiam sed cursus lacus. Integer id tortor at mi congue
            elementum. Quisque ac mi consequat, tempor purus a, facilisis odio.
          </p>
        </div>
      </Link>
      <Link to={"random-beer"}>
        <div className="card">
          <img src={imagerandom} alt="beers image" className="img" />
          <h3>Random Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tincidunt justo et ultrices. Duis non rhoncus augue, a
            egestas arcu. Etiam sed cursus lacus. Integer id tortor at mi congue
            elementum. Quisque ac mi consequat, tempor purus a, facilisis odio.
          </p>
        </div>
      </Link>
      <Link to={"new-beer"}>
        <div className="card">
          <img src={imagenewbeer} alt="beers image" className="img" />
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tincidunt justo et ultrices. Duis non rhoncus augue, a
            egestas arcu. Etiam sed cursus lacus. Integer id tortor at mi congue
            elementum. Quisque ac mi consequat, tempor purus a, facilisis odio.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Home;

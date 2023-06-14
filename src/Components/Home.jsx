import React from "react";
import { Link } from "react-router-dom";
import allBearsImg from "../assets/beers.png";
import randomBearImg from "../assets/random-beer.png";
import newBearImg from "../assets/new-beer.png";
function Home() {
  return (
    <div>
      <div className="menu">
        <Link to="/beers" className="menu-link">
          <img src={allBearsImg} alt="all bears" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
        </Link>
      </div>
      <div className="menu">
        <Link to="/random-beer" className="menu-link">
          <img src={randomBearImg} alt="all bears" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
        </Link>
      </div>
      <div className="menu">
        <Link to="/new-beer" className="menu-link">
          <img src={newBearImg} alt="all bears" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;

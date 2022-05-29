import React from "react";
import { Link } from "react-router-dom";
import imgbeers from "../assets/beers.png";
import imgRandomBeer from "../assets/random-beer.png";
import imgNewBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="homePage">
      <Link to="/beers" className="homePageLink">
        <img src={imgbeers} alt="something" />
        <h1>Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe
          explicabo culpa, totam magni sit quo ut hic ad blanditiis molestiae
          exercitationem velit cumque architecto quaerat vitae facilis iste
          ipsum?
        </p>
      </Link>
      <Link to="/random-beer" className="homePageLink">
        <img src={imgRandomBeer} alt="something" />
        <h1>Random beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati quidem minima itaque, repellendus voluptates nisi rerum,
          voluptatibus excepturi fugiat blanditiis officiis iste autem dicta
          molestiae porro vitae suscipit amet?
        </p>
      </Link>
      <Link to="/new-beer" className="homePageLink">
        <img src={imgNewBeer} alt="something" />
        <h1>New beer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis minus
          quisquam totam accusamus rem aliquam officia sed consectetur sapiente
          facilis repellendus, minima magni, quaerat distinctio nam vero aperiam
          inventore nesciunt.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;

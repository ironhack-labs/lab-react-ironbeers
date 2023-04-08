import React from "react";
import beers from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section>
      <img src={beers} alt="beers" />
      <Link to={"/beers"}>
        <h1>All Beers </h1>
      </Link>
      <p>
        The All Beers page in the IronBeers app displays a list of all the beers
        available in the database, including their names, images, and brief
        descriptions. Users can click on each beer to view more details such as
        the beer's ABV (alcohol by volume), IBU (international bittering unit),
        and the date it was first brewed.
      </p>

      <img src={randombeer} alt="random-beer" />
      <Link to={"/random-beer"}>
        <h1>Random Beer</h1>
      </Link>
      <p>
        All Random Beer is a feature of the IronBeers application that displays
        a random beer from the list of beers. The beer displayed changes each
        time the user refreshes the page or clicks the "Get a random beer"
        button.
      </p>

      <img src={newbeer} alt="new-beer" />
      <Link to={"/new-beer"}>
        <h1>New Beer</h1>
      </Link>
      <p>
        Creating a new beer involves a complex process of selecting ingredients,
        brewing, fermentation, and conditioning, with variations in each step
        leading to a wide range of beer styles and flavors. The final product
        can be influenced by factors such as the type and amount of malt, hops,
        yeast, and water used, as well as the brewing equipment and techniques
        employed.
      </p>
    </section>
  );
}

export default Homepage;

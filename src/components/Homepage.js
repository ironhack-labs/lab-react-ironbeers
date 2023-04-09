import React from "react";
import beers from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section className="font-semibold">

    <div className="container mx-auto bg-slate-300 rounded-lg drop-shadow-lg hover:drop-shadow-2xl pb-4 m-8">
      <img className="w-full rounded-t-lg mb-4"   src={beers} alt="beers" />
      <Link class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mb-4" to={"/beers"}>
        <p>All Beers </p>
      </Link>
      <p className="text-gray-700 text-base ml-4 mr-4">
        The All Beers page in the IronBeers app displays a list of all the beers
        available in the database, including their names, images, and brief
        descriptions. Users can click on each beer to view more details such as
        the beer's ABV (alcohol by volume), IBU (international bittering unit),
        and the date it was first brewed.
      </p>
    </div>

    <div className="container mx-auto bg-slate-300 rounded-lg drop-shadow-lg hover:drop-shadow-2xl pb-4 m-8">
      <img className="w-full rounded-t-lg" src={randombeer} alt="random-beer" />
      <Link class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mb-4" to={"/random-beer"}>
        <p>Random Beer</p>
      </Link>
      <p className="text-gray-700 text-base ml-4 mr-4" >
        All Random Beer is a feature of the IronBeers application that displays
        a random beer from the list of beers. The beer displayed changes each
        time the user refreshes the page or clicks the "Get a random beer"
        button.
      </p>
    </div>

    <div className="container mx-auto bg-slate-300 rounded-lg drop-shadow-lg hover:drop-shadow-2xl pb-4 m-8">
      <img className="w-full rounded-t-lg" src={newbeer} alt="new-beer" />
      <Link class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mb-4" to={"/new-beer"}>
        <p>New Beer</p>
      </Link>
      <p className="text-gray-700 text-base ml-4 mr-4" >
        Creating a new beer involves a complex process of selecting ingredients,
        brewing, fermentation, and conditioning, with variations in each step
        leading to a wide range of beer styles and flavors. The final product
        can be influenced by factors such as the type and amount of malt, hops,
        yeast, and water used, as well as the brewing equipment and techniques
        employed.
      </p>
    </div>
    </section>
  );
}

export default Homepage;

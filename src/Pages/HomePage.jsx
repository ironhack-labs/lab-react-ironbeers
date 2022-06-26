import { Link } from "react-router-dom";

import allBeers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <Link to="/allbeers">
        <article className="comp-home">
          <img src={allBeers} alt="all beers" />
          <div className="beerHeader">
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              voluptatum blanditiis mollitia provident soluta itaque praesentium
              maiores nostrum inventore rerum repellendus, magni esse, voluptate
              voluptas! Eaque ab aspernatur tenetur quo.
            </p>
          </div>
        </article>
      </Link>

      <Link to="/random">
        <article className="comp-home">
          <img src={randomBeer} alt="random beer" />
          <div className="beerHeader">
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              voluptates id officiis culpa, qui unde natus, odit, dolores
              numquam repellat enim sed laborum rem repudiandae quisquam. Porro
              illum quisquam dolorum.
            </p>
          </div>
        </article>
      </Link>

      <Link to="/new">
        <article className="comp-home">
          <img src={newBeer} alt="new beer" />
          <div className="beerHeader">
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              omnis commodi deleniti quisquam! Odio rem nisi, debitis ad porro,
              eligendi, tenetur voluptate error velit quos placeat architecto
              cumque impedit earum?
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default HomePage;

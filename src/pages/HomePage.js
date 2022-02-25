import imageAllBeers from "../assets/beers.png";
import imageNewBeer from "../assets/new-beer.png";
import imageRandomBeer from "../assets/random-beer.png";
import { Link, NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
    <Link to={"/beers"}>
      <div class="card mb-3">
        <img class="card-img-top" src={imageAllBeers} alt="card"></img>
        <div class="card-body">
          <h5 class="card-title">All Beers</h5>
          <p class="card-text">
            Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac,
            erat. Etiam egestas wisi a erat. Nulla non lectus sed nisl molestie
            malesuada. Etiam quis quam. Suspendisse nisl. Duis ante orci,
            molestie vitae vehicula venenatis, tincidunt ac pede. Phasellus
            faucibus molestie nisl.
          </p>
        </div>
      </div>
      </Link>

      <Link to={"/random-beer"}>
      <div class="card mb-3">
        <img class="card-img-top" src={imageRandomBeer} alt="card"></img>
        <div class="card-body">
          <h5 class="card-title">Random Beer</h5>
          <p class="card-text">
            Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac,
            erat. Etiam egestas wisi a erat. Nulla non lectus sed nisl molestie
            malesuada. Etiam quis quam. Suspendisse nisl. Duis ante orci,
            molestie vitae vehicula venenatis, tincidunt ac pede. Phasellus
            faucibus molestie nisl.
          </p>
        </div>
      </div>
      </Link>

      <Link to={"/new-beer"}>
      <div class="card mb-3">
        <img class="card-img-top" src={imageNewBeer} alt="card"></img>
        <div class="card-body">
          <h5 class="card-title">New Beer</h5>
          <p class="card-text">
            Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac,
            erat. Etiam egestas wisi a erat. Nulla non lectus sed nisl molestie
            malesuada. Etiam quis quam. Suspendisse nisl. Duis ante orci,
            molestie vitae vehicula venenatis, tincidunt ac pede. Phasellus
            faucibus molestie nisl.
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default HomePage;

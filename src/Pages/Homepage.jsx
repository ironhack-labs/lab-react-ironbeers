import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Homepage() {
  return (
    <div>
      <div className="container">
        <Link className="home-links" to="/beers">
          All Beers
        </Link>
        <img src={beers} alt="" className="page-img" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="container">
        <Link className="home-links" to="/randombeer">
          Random Beer
        </Link>
        <img src={randomBeer} alt="" className="page-img" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="container">
        <Link className="home-links" to="/newbeer">
          New Beer
        </Link>
        <img src={newBeer} alt="" className="page-img" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Homepage;

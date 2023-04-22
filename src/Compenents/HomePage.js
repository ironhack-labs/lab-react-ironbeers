import allBeersImage from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import createBeerImg from "../assets/new-beer.png";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="home-page-all">
        <Link class="all-beers-img" to="/beers">
          {" "}
          <img className="all-beers-img" src={allBeersImage} alt="all-beers" />
        </Link>
        <h2> All Beers </h2>
        <p>
          {" "}
          Welcome to Iron Beers! We offer a wide variety of beers from around
          the world. Below you can find our full list of beers, from classic
          lagers and ales to bold IPAs and stouts. Whether you're looking for
          something light and refreshing or rich and complex, we have a beer
          that will suit your taste.{" "}
        </p>
      </div>

      <div className="home-page-all">
        <Link className="all-beers-img" to = "/random-beer">  <img className="all-beers-img" src={randomBeerImg} alt="random" /> </Link>
        <h2>Random Beer</h2>
        <p>
          Feeling adventurous? Click here to select a random beer from our
          collection. Our selection includes beers from all around the world, so
          you never know what you might get. Who knows, you might just discover
          your new favorite beer!
        </p>
      </div>

      <div className="home-page-all">
       <Link className="all-beers-img"  to = "/new-beer" > <img className="all-beers-img" src={createBeerImg} alt="create-beer" /> </Link> 
        <h2> New Beer </h2>
        <p>
          Are you a beer enthusiast with a creative streak? Click here to create
          your own beer! Our brewing experts will work with you to bring your
          vision to life, from selecting the perfect blend of hops and malts to
          designing your custom label.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
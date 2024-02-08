import { Link } from "react-router-dom";
import AllBeer from "../assets/beers.png";
import RandomBeer from "../assets/beers.png";
import NewBeer from "../assets/beers.png";
import "./pages.css";

function HomePage() {
  return (
    <div className="container-home-page">
      <Link to="/beers">
        <img className="img-home-page-beers" src={AllBeer}></img>
        <div className="container-home-page-text">
          <h2 className="h2-home-page">All Beers</h2>
          <p className="p-home-page">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt, sem at sollicitudin interdum, mauris erat tincidunt
            augue, semper commodo nulla velit at nulla. Donec efficitur, dui
            eget vestibulum eleifend, ex dolor rhoncus quam, nec condimentum
            ipsum nunc ut magna.
          </p>
        </div>
      </Link>

      <Link to="/random-beer">
        <img src={RandomBeer}></img>
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt, sem at sollicitudin interdum, mauris erat tincidunt augue,
          semper commodo nulla velit at nulla. Donec efficitur, dui eget
          vestibulum eleifend, ex dolor rhoncus quam, nec condimentum ipsum nunc
          ut magna.
        </p>
      </Link>

      <Link to="/new-beer">
        <img src={NewBeer}></img>
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt, sem at sollicitudin interdum, mauris erat tincidunt augue,
          semper commodo nulla velit at nulla. Donec efficitur, dui eget
          vestibulum eleifend, ex dolor rhoncus quam, nec condimentum ipsum nunc
          ut magna.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;

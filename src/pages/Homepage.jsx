import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

export default function Homepage(props) {
  return (
    <div className="main-container">
      <div className="homepage-links">
        <Link className="link-card" to={"/beers"}>
          <img src={beers} alt="all-beers" />
          <h3>All beers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            elit eget massa feugiat congue vel ut nisl. Praesent vel sem sit
            amet elit feugiat elementum vitae non arcu. Praesent at ex tellus .
            Aliquam vitae tristique turpis, imperdiet lobortis purus. Quisque
            non velit leo. Morbi aliquam sapien at nisi luctus.
          </p>
        </Link>
        <Link className="link-card" to={"/random-beer"}>
          <img src={randomBeer} alt="random-beer" />
          <h3>Random beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            elit eget massa feugiat congue vel ut nisl. Praesent vel sem sit
            amet elit feugiat elementum vitae non arcu. Praesent at ex tellus .
            Aliquam vitae tristique turpis, imperdiet lobortis purus. Quisque
            non velit leo. Morbi aliquam sapien at nisi luctus.
          </p>
        </Link>
        <Link className="link-card" to={"/new-beer"}>
          <img src={newBeer} alt="new-beer" />
          <h3>New beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            elit eget massa feugiat congue vel ut nisl. Praesent vel sem sit
            amet elit feugiat elementum vitae non arcu. Praesent at ex tellus .
            Aliquam vitae tristique turpis, imperdiet lobortis purus. Quisque
            non velit leo. Morbi aliquam sapien at nisi luctus.
          </p>
        </Link>
      </div>
    </div>
  );
}

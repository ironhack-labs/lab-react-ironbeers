import beers from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section>
      <Link to={"/beers"}>
        <img src={beers} alt="beers" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          dui non lorem blandit sagittis. Donec sit amet ornare nunc. Duis
          commodo dignissim consectetur.
        </p>
      </Link>
      <Link to={"/random-beer"}>
        <img src={randombeer} alt="beers" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          dui non lorem blandit sagittis. Donec sit amet ornare nunc. Duis
          commodo dignissim consectetur.
        </p>
      </Link>
      <Link to={"/new-beer"}>
        <img src={newbeer} alt="beers" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          dui non lorem blandit sagittis. Donec sit amet ornare nunc. Duis
          commodo dignissim consectetur.
        </p>
      </Link>
    </section>
  );
}
export default HomePage;

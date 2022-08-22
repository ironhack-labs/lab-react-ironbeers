import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newbeer from "../../assets/new-beer.png";
import randombeer from "../../assets/random-beer.png";

function HomePage() {
  return (
    <div>
      <Link to={`/beers`}>
        <img src={beers} alt="Beers" />
        <h1>All beers</h1>
      </Link>
      <p>
        Thanks for putting up with everything Xico :-) <br/><br/> Last lab :-(
      </p>
      <Link to={`/new`}>
        <img src={newbeer} alt="New beer" />
        <h1>New beer</h1>
      </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est eaque
        nemo perferendis exercitationem omnis nisi eveniet dolores. Enim eaque
        ad nobis sint! Cum non, esse ut numquam explicabo reprehenderit.
      </p>
      <Link to={`/random`}>
        <img src={randombeer} alt="Random beer" />
        <h1>Random beer</h1>
      </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est eaque
        nemo perferendis exercitationem omnis nisi eveniet dolores. Enim eaque
        ad nobis sint! Cum non, esse ut numquam explicabo reprehenderit.
      </p>
    </div>
  );
}

export default HomePage;

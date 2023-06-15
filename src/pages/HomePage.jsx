import { Link } from "react-router-dom";
import imgAllBeers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

export default function HomePage() {
  return (
    <div className="d-flex row " style={{ width: "50%", margin: "10px" }}>
      <img src={imgAllBeers} alt="img-allBeers" />
      <Link to="/beers" className="text-decoration-none">
        <h2>All Beers</h2>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        officia nam odio eius dolores necessitatibus. Earum officiis sapiente ab
        vero non at distinctio totam commodi iste, perferendis ut accusantium
        vel.
      </p>
      <img src={randomBeer} alt="img-randomBeer" />
      <Link to={`/beers/random/`} className="text-decoration-none">
        <h2>Random Beers</h2>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        officia nam odio eius dolores necessitatibus. Earum officiis sapiente ab
        vero non at distinctio totam commodi iste, perferendis ut accusantium
        vel.
      </p>
      <img src={newBeer} alt="img-newBeer" />
      <Link to="new-beer" className="text-decoration-none ">
        <h2>New Beer</h2>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        officia nam odio eius dolores necessitatibus. Earum officiis sapiente ab
        vero non at distinctio totam commodi iste, perferendis ut accusantium
        vel.
      </p>
    </div>
  );
}

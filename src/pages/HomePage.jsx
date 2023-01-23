import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <div className="all-beers">
        <Link to={"/beers"} style={{ textDecoration: "none", color: "black" }}>
          <img src={beers} alt="" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            explicabo provident, sequi, fugiat autem quam laborum commodi
            reprehenderit doloremque, quaerat minima nobis consequatur harum eum
            molestias ab. Nobis, sequi odio.
          </p>
        </Link>
      </div>
      <div className="random-beer">
        <Link style={{ textDecoration: "none", color: "black" }}>
          <img src={randomBeer} alt="" />
          <h2>Random Beers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            explicabo provident, sequi, fugiat autem quam laborum commodi
            reprehenderit doloremque, quaerat minima nobis consequatur harum eum
            molestias ab. Nobis, sequi odio.
          </p>
        </Link>
      </div>
      <div className="new-beer">
        <Link style={{ textDecoration: "none", color: "black" }}>
          <img src={newBeer} alt="" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            explicabo provident, sequi, fugiat autem quam laborum commodi
            reprehenderit doloremque, quaerat minima nobis consequatur harum eum
            molestias ab. Nobis, sequi odio.
          </p>
        </Link>
      </div>
    </div>
  );
}

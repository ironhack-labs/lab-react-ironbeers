import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Link to="/beers">
        <div className="home-page-card">
          <img src={beersImg} />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            quisquam eveniet voluptatum quod voluptate veritatis laudantium
            voluptatibus itaque voluptates placeat assumenda tenetur, commodi ut
            accusantium sed rerum ullam facilis vero.
          </p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div className="home-page-card">
          <img src={randomBeerImg} />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            quisquam eveniet voluptatum quod voluptate veritatis laudantium
            voluptatibus itaque voluptates placeat assumenda tenetur, commodi ut
            accusantium sed rerum ullam facilis vero.
          </p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div className="home-page-card">
          <img src={newBeerImg} />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            quisquam eveniet voluptatum quod voluptate veritatis laudantium
            voluptatibus itaque voluptates placeat assumenda tenetur, commodi ut
            accusantium sed rerum ullam facilis vero.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;

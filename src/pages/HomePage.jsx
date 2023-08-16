import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div>
      <div className="card-link">
        <Link to="/beers" className="link">
          <img src={beers} alt="beers-img" />

          <h1>All Beers</h1>
          <p>
            Consequat ad pariatur irure est. Voluptate sunt velit et sit. Nulla
            enim enim adipisicing veniam qui duis sunt minim minim. Dolore est
            ea cupidatat incididunt deserunt irure.
          </p>
        </Link>
      </div>
      <div className="card-link">
        <Link to="/random-beer" className="link">
          <img src={randomBeer} alt="random-beer-img" />

          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque
            quasi rerum excepturi ea soluta blanditiis. A quo debitis adipisci
            excepturi harum? Quaerat laborum explicabo mollitia facere tenetur
            fuga itaque.
          </p>
        </Link>
      </div>
      <div className="card-link">
        <Link to="/new-beer" className="link">
          <img src={newBeer} alt="new-beer-img" />

          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            harum vero veritatis quasi, earum unde, ullam distinctio animi cum
            aut, expedita fugiat. Harum explicabo quos similique, odit ex
            laborum suscipit.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

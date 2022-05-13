import { NavLink } from "react-router-dom";
import beer from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <NavLink className="card-img-top" to="/beers">
          <img src={beer} alt="Beers List" />
        </NavLink>
        <div className="card-body">
          <h1 className="card-title">All Beers</h1>
          <p className="card-text">Find all the best beers in the world.</p>
        </div>
      </div>
      <div className="card">
        <NavLink className="card-img-top" to="/random-beer">
          <img src={randomBeer} alt="Beers List" />
        </NavLink>
        <div className="card-body">
          <h1 className="card-title">Random Beer</h1>
          <p className="card-text">
            Surprise yourself with something from our collection.
          </p>
        </div>
      </div>
      <div className="card">
        <NavLink className="card-img-top" to="/new-beer">
          <img src={newBeer} alt="Beers List" />
        </NavLink>
        <div className="card-body">
          <h1 className="card-title">New Beer</h1>
          <p className="card-text">
            Are we missing something you know? Fill our form and add it to our
            collection?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

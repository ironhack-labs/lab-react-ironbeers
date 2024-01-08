import beersImage from "../assets/beers.png";
import randomImage from "../assets/random-beer.png";
import addImage from "../assets/beers.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="pageContainer">
        <img src={beersImage} alt="All beers img" />
        <h1>
          <Link to="/beers">All Beers</Link>
        </h1>
        <p>Click to see all the beers collection!</p>
      </div>
      <div className="pageContainer">
        <img src={randomImage} alt="Random beer img" />
        <h1>
          <Link to="/random-beer">Random Beer</Link>
        </h1>
        <p>Click to get a random beer recomendation!</p>
      </div>
      <div className="pageContainer">
        <img src={addImage} alt="Add beer img" />
        <h1>
          <Link to="/new-beer">New Beer</Link>
        </h1>
        <p>Click to add a new beer to the collection!</p>
      </div>
    </div>
  );
}
export default HomePage;

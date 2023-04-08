import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/beers.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

  return (
    <div>
      <div onClick={()=>{navigate("/beers");}}  className="card text-start " style={{ width: 28 + "rem" }}>
        <img src={beers} className="card-img-top" alt="..." />
        <div className="card-body">
            <h2>All Beers</h2>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div onClick={()=>{navigate("/random-beer");}} className="card text-start" style={{ width: 28 + "rem" }}>
        <img src={randomBeer} className="card-img-top" alt="..." />
        <div className="card-body">
        <h2>Random Beer</h2>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div onClick={()=>{navigate("/new-beer");}} className="card text-start" style={{ width: 28 + "rem" }}>
        <img src={newBeer} className="card-img-top" alt="..." />
        <div className="card-body">
        <h2>New Beer</h2>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

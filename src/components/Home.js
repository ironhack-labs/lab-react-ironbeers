import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function Home() {
const style = { textDecoration: "none", color: "black" };
  return (
    <div className="Home">
      <div className="container">
      <div className="row">
      <div className="col col-lg-4">
        <Link to="/beers" style={style}>
          <div className="card m-2 p-3">
            <img src={beersImg} alt="beers" />
            <h2>All Beers</h2>
            <p>
              The array of beers is array of objects. We strongly advise you to
              console log the response from the API so you can see the structure
              of it
            </p>
          </div>
        </Link>
        </div>
        <div className="col col-lg-4">
        <Link to="/random-beer" style={style}>
        <div className="card m-2 p-3">
            <img src={randomBeerImg} alt="beers" />
            <h2>Random Beer</h2>
            <p>
              The array of beers is array of objects. We strongly advise you to
              console log the response from the API so you can see the structure
              of it
            </p>
          </div>
        </Link>
        </div>
        <div className="col col-lg-4">
        <Link to="new-beer" style={style}>
        <div className="card m-2 p-3">
            <img src={newBeerImg} alt="beers" />
            <h2>New Beer</h2>
            <p>
              The array of beers is array of objects. We strongly advise you to
              console log the response from the API so you can see the structure
              of it
            </p>
          </div>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

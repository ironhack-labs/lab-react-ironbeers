import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
function HomePage() {
  return (
    <div className="main">
        <section>
            <img src={beersImg} alt="beersImg" />
            <h2>All Beers</h2>
            <p>Hello All Beers</p>
            <Link to={"/beers"}>Click Here</Link>
        </section>
        <section>
            <img src={randomBeerImg} alt="randomBeerImg" />
            <h2>Random Beer</h2>
            <p>Hello Random Beer</p>
            <Link to={"/random-beer"}>Click Here</Link>
        </section>
        <section>
            <img src={newBeerImg} alt="newBeerImg" />
            <h2>New Beer</h2>
            <p>Hello New Beer</p>
            <Link to={"/new-beer"}>Click Here</Link>
        </section>
    </div>
  );
}

export default HomePage;

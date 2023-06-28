import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function HomePage() {
  return (
    <>
      <Link to="/beers">
        <img src={beersImg} alt="beer img" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi
          lorem, tristique tempus neque vitae, malesuada tempus libero. Nullam
          posuere nunc nec lectus malesuada efficitur.
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="beer img" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi
          lorem, tristique tempus neque vitae, malesuada tempus libero. Nullam
          posuere nunc nec lectus malesuada efficitur.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="beer img" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi
          lorem, tristique tempus neque vitae, malesuada tempus libero. Nullam
          posuere nunc nec lectus malesuada efficitur.
        </p>
      </Link>
    </>
  );
}

export default HomePage;

import { Link } from "react-router-dom";
import allBeersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <Link to={"/beers"}>
        <img src={allBeersImage} alt="beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
          expedita fuga, magnam quasi at sapiente totam nam reprehenderit
          quaerat nemo in, veritatis quibusdam. Distinctio pariatur odit quas
          explicabo quam.
        </p>
      </Link>
      <Link to={"/random-beer"}>
        <img src={randomBeerImage} alt="beers" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
          expedita fuga, magnam quasi at sapiente totam nam reprehenderit
          quaerat nemo in, veritatis quibusdam. Distinctio pariatur odit quas
          explicabo quam.
        </p>
      </Link>
      <Link to={"/new-beer"}>
        <img src={newBeerImage} alt="beers" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
          expedita fuga, magnam quasi at sapiente totam nam reprehenderit
          quaerat nemo in, veritatis quibusdam. Distinctio pariatur odit quas
          explicabo quam.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;

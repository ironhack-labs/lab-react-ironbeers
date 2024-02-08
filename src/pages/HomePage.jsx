import { Link } from "react-router-dom";
import allBeersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="homePage">
      <Link className="categoryContainer" to={"/beers"}>
        <img className="categoryImage" src={allBeersImage} alt="beers" />
        <h2 className="categoryTitle">All Beers</h2>
        <p className="categoryText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
          expedita fuga, magnam quasi at sapiente totam nam reprehenderit
          quaerat nemo in, veritatis quibusdam. Distinctio pariatur odit quas
          explicabo quam.
        </p>
      </Link>
      <Link className="categoryContainer" to={"/random-beer"}>
        <img className="categoryImage" src={randomBeerImage} alt="beers" />
        <h2 className="categoryTitle">Random Beer</h2>
        <p className="categoryText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
          expedita fuga, magnam quasi at sapiente totam nam reprehenderit
          quaerat nemo in, veritatis quibusdam. Distinctio pariatur odit quas
          explicabo quam.
        </p>
      </Link>
      <Link className="categoryContainer" to={"/new-beer"}>
        <img className="categoryImage" src={newBeerImage} alt="beers" />
        <h2 className="categoryTitle">New Beer</h2>
        <p className="categoryText">
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

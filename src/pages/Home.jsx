import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import BeerList from "./BeersList";

function Home() {
  return (
    <div>
      <Link to={"/beers"}>
        <img src={beers} alt="beer" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad
          repudiandae tenetur fuga deleniti porro vero ducimus reiciendis
          distinctio saepe, reprehenderit dolore delectus! Voluptate saepe eaque
          quisquam eius harum assumenda?
        </p>
      </Link>

      <Link to={"/randomBeers"}>
        <img src={randomBeer} alt="random beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          corrupti veritatis ipsum autem esse atque a quae quasi distinctio,
          modi non hic iste neque aliquam culpa amet est consectetur doloribus.
        </p>
      </Link>

      <Link to={"/newBeer"}>
        <img src={newBeer} alt="new beer" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          corrupti veritatis ipsum autem esse atque a quae quasi distinctio,
          modi non hic iste neque aliquam culpa amet est consectetur doloribus.
        </p>
      </Link>
    </div>
  );
}

export default Home;

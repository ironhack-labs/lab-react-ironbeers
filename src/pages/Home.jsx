import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/beers">
        <img src={beersImg} alt="Beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum! Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum!
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum! Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum!
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="New Beer" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum! Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum!
        </p>
      </Link>
    </div>
  );
}

export default Home;

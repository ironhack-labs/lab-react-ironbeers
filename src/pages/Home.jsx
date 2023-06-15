import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="card">
        <Link to="/beers">
          <img src={beersImg} alt="Beers" className="homeImg" />
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum! Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum!
        </p>
      </div>
      <div className="card">
        <Link to="/random-beer">
          <img src={randomBeerImg} alt="Random Beer" className="homeImg" />
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum! Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum!
        </p>
      </div>
      <div className="card">
        <Link to="/new-beer">
          <img src={newBeerImg} alt="New Beer" className="homeImg" />
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum! Quisquam
          voluptatibus, quae, voluptas, aspernatur quia quos voluptates
          voluptatem reprehenderit quod doloribus voluptatum!
        </p>
      </div>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";

export function Home({ beersImg, newBeersImg, randomBeersImg }) {
  return (
    <div className="page-container" style={{ width: 720, margin: "auto" }}>
      <Link style={{ textDecoration: "none", color: "black" }} to={"beer-list"}>
        <img src={beersImg} alt="beers on tap logos" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores blanditiis
          nulla, nihil dolorum sequi excepturi iusto ipsa beatae tenetur voluptatem adipisci fugiat
          quia quisquam facere voluptatibus accusantium sed qui!
        </p>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/random-beer"}>
        <img src={newBeersImg} alt="shining beer taps" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe pariatur eum impedit facere
          delectus. Illo neque perferendis laudantium officiis facere in provident nostrum
          cupiditate? Ut debitis odit sit accusantium consequatur.
        </p>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/new-beer"}>
        <img src={randomBeersImg} alt="closeup of beer bottle and glass" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat praesentium iste sint nam
          magni ad expedita, modi enim magnam autem! Eveniet saepe a non sit, dolorem facilis magni.
          Ducimus, deserunt!
        </p>
      </Link>
    </div>
  );
}

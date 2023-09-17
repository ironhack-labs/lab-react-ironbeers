import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <img src="src/assets/beers.png" alt="" />
      <Link to={"/beers"}><h1>All Beers</h1></Link>
      <img src="src/assets/random-beer.png" alt="" />
      <Link to={"/random-beer"}><h1>Random Beer</h1></Link>
      <img src="src/assets/new-beer.png" alt="" />
      <Link to={"/new-beer"}><h1>New Beer</h1></Link>
    </div>
  );
}

export default HomePage;

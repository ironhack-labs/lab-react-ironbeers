import { Link } from "react-router-dom";

function HomePage() {
  return (
    <nav className="HomePage-nav">
      <Link to={"/beers"}>All Beers</Link>
      <Link to={"/random-beer"}>Random Beer</Link>
      <Link to={"/new-beer"}>New Beer</Link>
    </nav>
  );
}

export default HomePage;

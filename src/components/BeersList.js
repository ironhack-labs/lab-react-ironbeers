import { Link } from "react-router-dom";

function BeersList() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <h1>this is the page to list all the beers</h1>
    </div>
  );
}

export default BeersList;

import { Link } from "react-router-dom";

function RandomBeer() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <h1>this is the page for a random beer</h1>
    </div>
  );
}

export default RandomBeer;

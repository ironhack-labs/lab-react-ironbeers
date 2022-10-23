import { Link } from "react-router-dom";

function BeerDetails() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <h1>this is the page to display the details of a beer</h1>
    </div>
  );
}

export default BeerDetails;

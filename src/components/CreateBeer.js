import { Link } from "react-router-dom";

function CreateBeer() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <h1>this is the page to create a new beer</h1>
    </div>
  );
}

export default CreateBeer;

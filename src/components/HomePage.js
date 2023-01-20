import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <img src="../assets/beers.png" alt="a bar" />
      <h1>This is the homepage</h1>
      <Link className="App-link" to="/beers">
        All Beers
      </Link>
      <br />
      <img src="" alt="" />
      <Link className="App-link" to="/random-beer">
        Random Beer
      </Link>
      <br />
      <img src="" alt="" />
      <Link className="App-link" to="/new-beer">
        New Beer
      </Link>
    </div>
  );
};

export default HomePage;

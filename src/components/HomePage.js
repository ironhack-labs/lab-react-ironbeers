import "./HomePage.css";

////My Components////
import { Link } from "react-router-dom";
import Header from "./Header";
/////////////////////

function HomePage() {
  return (
      <div>
          <Header />
      <div className="HomePage">
        <Link to="/beers">All Beers</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">New Beer</Link>
      </div>
    </div>
  );
}

export default HomePage;

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage-container">
      <Link to="/beers">
        <div className="homepage-card">
          <img src="../../public/beers.png" alt="" />
          <h1 className="homepage-beer-title">All Beers</h1>
          <p className="homepage-beer-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            sed unde quo debitis facere cum commodi perspiciatis iusto?
            Consequatur quae, aliquid officiis animi laudantium dolor facilis
            deserunt natus quam vero.
          </p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="homepage-card">
          <img src="../../public/random-beer.png" alt="" />
          <h1 className="homepage-beer-title">Random Beer</h1>
          <p className="homepage-beer-description">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            sed unde quo debitis facere cum commodi perspiciatis iusto?
            Consequatur quae, aliquid officiis animi laudantium dolor facilis
            deserunt natus quam vero.
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="homepage-card">
          <img src="../../public/new-beer.png" alt="" />
          <h1 className="homepage-beer-title">New Beer</h1>
          <p className="homepage-beer-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            sed unde quo debitis facere cum commodi perspiciatis iusto?
            Consequatur quae, aliquid officiis animi laudantium dolor facilis
            deserunt natus quam vero.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;

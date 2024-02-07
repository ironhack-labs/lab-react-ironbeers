import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <div>
          <img src="../../public/beers.png" alt="" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            sed unde quo debitis facere cum commodi perspiciatis iusto?
            Consequatur quae, aliquid officiis animi laudantium dolor facilis
            deserunt natus quam vero.
          </p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div>
          <img src="../../public/random-beer.png" alt="" />
          <h1>Random Beer</h1>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            sed unde quo debitis facere cum commodi perspiciatis iusto?
            Consequatur quae, aliquid officiis animi laudantium dolor facilis
            deserunt natus quam vero.
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div>
          <img src="../../public/new-beer.png" alt="" />
          <h1>New Beer</h1>
          <p>
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

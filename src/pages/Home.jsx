import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <section>
      <img src="/assets/beers.png" alt="Beers" />
      <Link to="/Beers" className="home-link">Beers</Link>
    </section>

    <section>
      <img src="/assets/new-beer.png" alt="New Beer" />
      <Link to="/NewBeer" className="home-link">New Beer</Link>
    </section>

    <section>
      <img src="/assets/random-beer.png" alt="Random Beers" />
      <Link to="/RandomBeer" className="home-link">Random Beer</Link>
    </section>
  </div>
);


export default Home;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav>
      <section className="container">
        <Link to="/beers">
          <img src="./assets/beers.png" alt="The front of a bar counter." />
          <h2 className="text-2xl">All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            vero esse assumenda perspiciatis quis quaerat repellendus porro hic
            maiores neque? Incidunt, quisquam maiores ducimus at ipsum iure
            recusandae est dolor.
          </p>
        </Link>
      </section>
      <section className="container">
        <Link to="/random-beer">
          <img src="./assets/random-beer.png" alt="Beer related" />
          <h2 className="text-2xl">Random Beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quia
            minus ullam eligendi nobis ea maxime inventore repudiandae
            perspiciatis amet doloribus ipsam repellat rerum voluptatum tempore
            magni voluptates, voluptas veniam!
          </p>
        </Link>
      </section>
      <section className="container">
        <Link to="/new-beer">
          <img src="./assets/new-beer.png" alt="Beer related" />
          <h2 className="text-2xl">New Beer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            iste officiis reiciendis sed quae omnis molestiae quidem quas
            quisquam ab, laboriosam atque magnam, corrupti nulla officia
            quaerat, dicta voluptas vel!
          </p>
        </Link>
      </section>
    </nav>
  );
};

export default Home;

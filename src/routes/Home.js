import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
// import Beersx

const Home = () => {
  return (
    <nav>
      <section className="shadow bg-slate-100 hover:shadow-lg hover:bg-slate-50 pb-4 mb-4">
        <Link to="/beers">
          <img
            className="mb-2 min-w-full "
            src={beersImg}
            alt="The front of a bar counter."
          />
          <h2 className="px-4 text-2xl font-semibold mb-1">All Beers</h2>
          <p className="px-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            vero esse assumenda perspiciatis quis quaerat repellendus porro hic
            maiores neque? Incidunt, quisquam maiores ducimus at ipsum iure
            recusandae est dolor.
          </p>
        </Link>
      </section>
      <section className="shadow bg-slate-100 hover:shadow-lg hover:bg-slate-50 pb-4  mb-4">
        <Link to="/random-beer">
          <img
            className="mb-2 min-w-full "
            src={randomBeerImg}
            alt="Beer related"
          />
          <h2 className="px-4 text-2xl font-semibold mb-1">Random Beer</h2>
          <p className="px-4 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quia
            minus ullam eligendi nobis ea maxime inventore repudiandae
            perspiciatis amet doloribus ipsam repellat rerum voluptatum tempore
            magni voluptates, voluptas veniam!
          </p>
        </Link>
      </section>
      <section className="shadow bg-slate-100 hover:shadow-lg hover:bg-slate-50 pb-4 mb-4">
        <Link to="/new-beer">
          <img
            className="mb-2 min-w-full "
            src={newBeerImg}
            alt="Beer related"
          />
          <h2 className="px-4 text-2xl font-semibold mb-1">New Beer</h2>
          <p className="px-4 text-gray-600">
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

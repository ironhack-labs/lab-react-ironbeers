import { Link } from "react-router-dom";
import AllBeersImg from "../assets/beers.png";
import RandomBeerImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <img src={AllBeersImg} alt="All Beers" className="page-img" />
      <Link to="/beers">
        <h2>All Beers</h2>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
        dictum elementum. Integer eu vestibulum mi. Suspendisse eleifend, neque
        id posuere accumsan, lacus ante pharetra mauris, et aliquam eros arcu
        vel dui. Sed ac ultricies felis. Pellentesque tristique sit amet ex et
        aliquam.
      </p>

      <Link to="/random-beer">
        <img src={RandomBeerImg} alt="Random Beer" className="page-img" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
          dictum elementum. Integer eu vestibulum mi. Suspendisse eleifend,
          neque id posuere accumsan, lacus ante pharetra mauris, et aliquam eros
          arcu vel dui. Sed ac ultricies felis. Pellentesque tristique sit amet
          ex et aliquam.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={NewBeerImg} alt="New Beer" className="page-img" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
          dictum elementum. Integer eu vestibulum mi. Suspendisse eleifend,
          neque id posuere accumsan, lacus ante pharetra mauris, et aliquam eros
          arcu vel dui. Sed ac ultricies felis. Pellentesque tristique sit amet
          ex et aliquam.
        </p>
      </Link>
    </div>
  );
}

export default Home;

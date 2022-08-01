import { Link } from "react-router-dom";
import OptionCard from '../components/OptionCard';

function Home() {
  return (
    <>
      <Link to="/beers">
        <OptionCard
          option="All Beers"
          decription="some description"
          img="beers.png"
        />
      </Link>

      <Link to="/random-beer">
        <OptionCard
          option="Random Beer"
          decription="some description"
          img="random-beer.png"
        />
      </Link>

      <Link to="/new-beer">
        <OptionCard
          option="New Beer"
          decription="some description"
          img="new-beer.png"
        />
      </Link>
    </>
  );
}

export default Home;

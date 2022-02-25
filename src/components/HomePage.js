import { Link } from "react-router-dom";
import BeersList from "./BeersList";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";


export default function HomePage() {
  return (
    <>
      <div className="HomePage">
        <h1>Beersss</h1>

        <Link to="/beers" element={<BeersList />}>
          All beers
        </Link>
        <Link to="/random-beer" element={<RandomBeer />}>
          Random beer
        </Link>
        <Link to="/new-beer" element={<NewBeer />}>
          Add new beer
        </Link>
      </div>
    </>
  );
}

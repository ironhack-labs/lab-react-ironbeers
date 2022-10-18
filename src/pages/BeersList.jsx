import BeerCard from "../components/BeerCard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const BeersList = ({ beers }) => {
  return (
    <div className="beer-list">
      <Navbar />
      {beers.map((beer) => (
        <BeerCard beer={beer} key={beer._id} />
      ))}
    </div>
  );
};

export default BeersList;
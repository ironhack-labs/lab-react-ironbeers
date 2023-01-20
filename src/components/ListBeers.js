import "./ListBeers.css";
import Header from "./Header";
import { Link } from "react-router-dom";

function ListBeers(props) {
  return (
    <div className="ListBeers">
      <Header />
      <h1>Beers List</h1>
      {props.beers.slice(0).reverse().map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt="" />
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <h4>{beer.contributed_by}</h4>
            <Link to={"/beers/" + beer._id}>More Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;

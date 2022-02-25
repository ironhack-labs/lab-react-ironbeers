import { Link } from "react-router-dom";

function Beers(props) {
  return (
    <div>
      {props.beerList.map((beer) => {
        return (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <img src={beer.image_url} alt="beerpic" style={{ width: "4%" }} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <hr></hr>
          </Link>
        );
      })}
    </div>
  );
}
export default Beers;

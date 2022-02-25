import { Link } from "react-router-dom";

function Beer(props) {
    //console.log(props)
  return (
    <div>
      <Link to="/beers"> All beers </Link>
      <br />
      <img src={props.beer.image_url} alt="beerpic" style={{ width: "4%" }} />
      <h2>{props.beer.name}</h2>
      <p>{props.beer.tagline}</p>
      <p>{props.beer.first_brewed}</p>
      <p>{props.beer.attenuation_level}</p>
      <p>{props.beer.description}</p>
      <p>{props.beer.contributed_by}</p>
    </div>
  );
}
export default Beer;

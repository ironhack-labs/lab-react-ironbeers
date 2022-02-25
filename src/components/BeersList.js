import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function BeersList(props) {
  return (
    <>
      <div className="BeersList">
        <NavBar />

        <ul>
          {props.beers.map((elm) => {
            return (
              <li>
                <img src={elm.image_url} alt={elm.name} />
                <h3>Name: {elm.name} </h3>
                <p>Tagline: {elm.tagline} </p>
                <p>Contributed by: {elm.contributed_by} </p>

                <Link to={`/beers/${elm._id}`}>More details</Link>
                
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

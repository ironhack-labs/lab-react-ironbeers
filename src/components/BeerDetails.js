import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import './BeerDetails.css';

function BeerDetails(props) {
  const { beerId } = useParams();
  console.log(beerId)

  const details = props.beersArr?.find((beerDetails) => {
    return beerDetails._id == beerId;
  });

  return (
    <div>

      <Header />

      <div className="details" key={details._id}>
        <img src={details.image_url} alt="beer" />
      </div>
      <div>
        <h2>{details.name}</h2>
        <h4>{details.tagline}</h4>
        <h4>First brewed: {details.first_brewed}</h4>
        <h4>Attenuation level: {details.attenuation_level}</h4>
        <p>Description: {details.description}</p>
        <h4>First brewed: {details.first_brewed}</h4>
        <h4>Created by: {details.contributed_by}</h4>
      </div>
      <Link to='/beers'>Back</Link>
    </div>
  );
}

export default BeerDetails;

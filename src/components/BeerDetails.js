import Header from "./Header";
import { useParams } from "react-router-dom";

function BeerDetails(props) {
  const { beerId } = useParams();

  const beerDetails = props.beers.find((beer) => {
    return beer._id === beerId
});

  return (
    <div>
      <Header />
      <img src={beerDetails.image_url} alt={beerDetails.name} />
      <h2>{beerDetails.name}</h2>
      <p>{beerDetails.tagline}</p>
      <p>{beerDetails.first_brewed}</p>
      <p>{beerDetails.attenuation_level}</p>
      <p>{beerDetails.description}</p>
      <p>{beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetails;

import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

export default function BeerDetails(props) {
  const { beerId } = useParams();

  const singleBeer = props.beers.find((elm) => {
    return elm._id === beerId;
  });

  const renderDetails = (singleBeer) => {
    return (
      <>
        <img src={singleBeer.image_url} alt={singleBeer.name} />
        <h3>Name: {singleBeer.name} </h3>
        <p>Tagline: {singleBeer.tagline} </p>
        <p>First brewed: {singleBeer.first_brewed} </p>
        <p>Att. level: {singleBeer.attenuation_level} </p>
        <p>Description: {singleBeer.description} </p>
        <p>Contributed by: {singleBeer.contributed_by} </p>
      </>
    );
  };

  return (
    <div className="BeerDetails">
      <NavBar />

      {singleBeer ? renderDetails(singleBeer) : <p>No details.....</p>}

    </div>
  );
}

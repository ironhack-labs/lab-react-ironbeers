import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

export default function BeerDetails(props) {
  const { beerId } = useParams();

  const singleBeer = props.beers.find((elm) => {
    return elm._id === beerId;
  });

  const renderDetails = (elm) => {
    return (
      <>
        <img src={elm.image_url} alt={elm.name} />
        <h3>Name: {elm.name} </h3>
        <p>Tagline: {elm.tagline} </p>
        <p>First brewed: {elm.first_brewed} </p>
        <p>Att. level: {elm.attenuation_level} </p>
        <p>Description: {elm.description} </p>
        <p>Contributed by: {elm.contributed_by} </p>
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

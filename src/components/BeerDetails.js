import { useParams } from "react-router-dom";
import "./BeerDetails.css";

function BeerDetails(props) {
  const { beerId } = useParams();
  const result = props.beers?.find((element) => {
    return element?._id === beerId;
  });
  const renderDetails = () => {
    return (
      <div>
        <img src={result.image_url} alt="individual-beer" />
        <h2>Name: {result.name}</h2>
        <div className="line"></div>
        <p>{result.tagline}</p>
        <div className="container">
          <p>Its first: {result.first_brewed}</p>
          <p>Attenuation: {result.attenuation_level}</p>
        </div>
        <p className="description">{result.description}</p>
        <span>Created by: {result.contributed_by}</span>
      </div>
    );
  };
  return (
    <div>{result === null ? <p>Wait a second...</p> : renderDetails()}</div>
  );
}

export default BeerDetails;

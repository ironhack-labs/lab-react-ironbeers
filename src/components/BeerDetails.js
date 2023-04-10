import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const BeerDetails = (props) => {
  const { beerId } = useParams();

  const oneBeer = props.beers.find((beer) => beer._id === beerId);

  return (
    <>
      <NavBar />
      <div>
        <img
          src={oneBeer.image_url}
          alt={oneBeer.name}
          style={{ width: "100px", marginTop: "50px" }}
        />
      </div>
      <div>
        <h2>{oneBeer.name}</h2>
        <p>{oneBeer.tagline}</p>
        <p>{oneBeer.first_brewed}</p>
        <h4>{oneBeer.attenuation_level}</h4>
        <p>{oneBeer.description}</p>
        <h3>{oneBeer.contributed_by}</h3>
      </div>
    </>
  );
};

export default BeerDetails;

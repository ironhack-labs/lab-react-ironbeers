import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const BeerDetails = ({ props }) => {
  const { beerId } = useParams();
  const beerDetail = props.find((beer) => beer._id === beerId);

  return (
    <div>
      {beerDetail && (
        <>
          <img src={beerDetail.image_url} alt={beerDetail.name} />
          <h2>{beerDetail.name}</h2>
          <h5>
            <i>{beerDetail.tagline}</i>
          </h5>
          <p>First brewed: {beerDetail.first_brewed}</p>
          <p>Attenuation level :{beerDetail.attenuation_level}</p>
          <p>Description : {beerDetail.description}</p>
          <p>Contributed by: {beerDetail.contributed_by}</p>
          <NavLink to={"/beers"}>Back to List of Beers</NavLink>
        </>
      )}
    </div>
  );
};

export default BeerDetails;

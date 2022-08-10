import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const SingleBeer = ({ beerApi }) => {
  const { id } = useParams();
  const beer = beerApi.find((beer) => beer._id === id);
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = beer;
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img src={image_url} width="125" alt={name} />
        <h1>
          {name} <span> {attenuation_level} </span>
        </h1>
        <p>
          {tagline} <span> {first_brewed} </span>
        </p>
        <p> {description} </p>
        <p> {contributed_by} </p>
        <Link to="/beers"> Back to all beers </Link>
      </div>
    </div>
  );
};

export default SingleBeer;

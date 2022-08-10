import Header from "../components/Header";
import {Link} from 'react-router-dom'

const RandomBeer = ({beerApi}) => {
  const randomBeer = beerApi[Math.floor(Math.random() * beerApi.length)]

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = randomBeer;
  
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
        <Link to="/"> Back to Home </Link>
      </div>
    </div>
  );
};

export default RandomBeer;

import { useParams } from "react-router-dom";

function Beer({ beers }) {
  const params = useParams();

  console.log(params);
  console.log(beers);
  const foundBeer = beers.find((beer) => beer._id === params.beerId);
  return (
    <div className="oneBeer">
      <img className="beerImg" src={foundBeer.image_url} alt={foundBeer.name} />
      <div className="oneBeerName">
        <h1>{foundBeer.name}</h1>
        <p>{foundBeer.attenuation_level}</p>
      </div>
      <div className="oneBeerTagLine">
        <h2>{foundBeer.tagline}</h2>
        <p>{foundBeer.first_brewed}</p>
      </div>
      <div className="oneBeerdescription">
        <p>{foundBeer.description}</p>
      </div>
      <div className="oneBeerContributedBy">
        <p>{foundBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default Beer;

import { useParams } from "react-router-dom";

function BeerDetails({ beers }) {
  const { beerId } = useParams();
  const allBeers = beers;
  const singleBeer = allBeers.find((beer) => {
    return beer._id === beerId;
  });
  console.log(singleBeer);

  return (
    <div className='beer-details'>
      <img src={singleBeer.image_url} alt='Beer bottle' />
      <div className='beer-details-header'>
        <div className='beer-details-left'>
          <h1>{singleBeer.name}</h1>
          <h3>{singleBeer.tagline}</h3>
        </div>
        <div className='beer-details-right'>
          <h2>{singleBeer.attenuation_level}</h2>
          <p>
            <strong>{singleBeer.first_brewed}</strong>
          </p>
        </div>
      </div>
      <div className='beer-details-main'>
        <p>{singleBeer.description}</p>
        <span>{singleBeer.contributed_by}</span>
      </div>
    </div>
  );
}

export default BeerDetails;

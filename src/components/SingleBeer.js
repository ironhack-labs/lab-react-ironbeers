import { useParams } from "react-router-dom";

function BeerDetails({ beers }) {
  const { beerId } = useParams();

  const beerDetailArray = beers.filter((item) => {
    return item._id === beerId;
  });

  const beer = beerDetailArray[0];
  console.log(beer);

  return (
    <div>
      <div
        className='card d-flex align-items-center justify-content-center'
        style={{ width: "30rem" }}
      >
        <img
          src={beer && beer.image_url}
          className='card-img-top'
          alt={beer && beer.name}
        />
        <div className='card-body'>
          <div className='d-flex flex-row justify-content-xl-between'>
            <h5 className='card-title'>{beer && beer.name}</h5>
            <h5 className='card-title' style={{ color: "grey" }}>
              {beer && beer.attenuation_level}
            </h5>
          </div>
          <div className='d-flex flex-row justify-content-xl-between'>
            <p className='card-text' style={{ color: "grey" }}>
              {beer && beer.tagline}
            </p>
            <p className='card-text'>
              <span style={{ fontWeight: "bold" }}>
                {beer && beer.first_brewed}
              </span>
            </p>
          </div>
          <p className='card-text'>
            <span style={{ fontWeight: "bold" }}>
              {beer && beer.description}
            </span>
          </p>
          <p className='card-text' style={{ color: "grey" }}>
            {beer && beer.contributed_by}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;

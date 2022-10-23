import { useParams } from "react-router-dom";

function BeerDetails({ beers }) {
  const { id } = useParams();
  const beer = beers.find((beer) => beer._id === id);

  return (
    <div className="container">
      {beer !== [] ? (
        <>
          <div className="row">
            <div className="col col-12 text-center">
              <img src={beer.image_url} alt={beer.name} />
            </div>
          </div>
          <div className="row">
            <div className="col col-6">
              <h1>{beer.name}</h1>
            </div>
            <div className="col col-6 text-right text-black-50">
              <h1>{beer.attenuation_level}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-9 text-black-50">
              <h3>{beer.tagline}</h3>
            </div>
            <div className="col col-3 text-right font-weight-bold">
              {beer.first_brewed}
            </div>
          </div>
          <div className="row">
            <div className="col font-weight-bold">
              <p>{beer.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-black-50">
              <h6>{beer.contributed_by}</h6>
            </div>
          </div>
        </>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
}

export default BeerDetails;

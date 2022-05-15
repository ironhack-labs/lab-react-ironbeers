import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetails(props) {
  const [beerDetail, setBeerDetail] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    beerDetail === null
      ? props.getBeers(`/${id}`)
      : console.log("already called");
    setBeerDetail((prevBeers) => {
      return props.beer;
    });
  }, [props]);

  console.log(beerDetail);

  return (
    <>
      {beerDetail === null ? (
        <h3>Loading...</h3>
      ) : (
        <div className="beer-details">
          <img src={beerDetail.image_url} />
          <h1>{beerDetail.name}</h1>
          <h4>{beerDetail.tagline}</h4>
          <h4>{beerDetail.first_brewed}</h4>
          <h4>{beerDetail.attenuation_level}</h4>
          <p>{beerDetail.description}</p>
          <p>{beerDetail.contributed_by}</p>
        </div>
      )}
    </>
  );
}

export default BeerDetails;

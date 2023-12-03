import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BeerDetailsPage() {
  const [beerDetail, setBeerDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((resp) => setBeerDetail(resp.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [beerId]);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div className="homepage">
      {beerDetail && (
        <div key={beerDetail._id}>
          <img src={beerDetail.image_url} alt={beerDetail.name + "img"} />
          <div>
            <h2>{beerDetail.name}</h2>
            <p>First Brewed: {beerDetail.first_brewed}</p>
            <p>Attenuation Level: {beerDetail.attenuation_level}</p>
            <p>Description: {beerDetail.description}</p>
            <p>Contributed by: {beerDetail.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;

import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDetailed from "../../components/beers/BeerDetailed";
import { beerDetail } from "../../services/BeerService";

const SingleBeer = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [beer, setBeer] = useState(null);

  const getBeer = useCallback(() => {
    beerDetail(id)
      .then((beer) => {
        setLoading(false);
        setBeer(beer);
      })
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    getBeer();
  }, [getBeer]);

  return <div>
    {loading ? <p>Loading..</p> : <BeerDetailed beer={beer}/>}
  
  </div>;
};

export default SingleBeer;

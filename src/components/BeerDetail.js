import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header";

function BeerDetail(props) {
  const baseURL = "https://ih-beers-api2.herokuapp.com";

  const { beerId } = useParams();
  const [beerDetail, setBeerDetail] = useState(null);

  const fetchBeerDetail = async () => {
    try {
        let res ;
        if(props.isRandom){
            res = await axios.get(baseURL + "/beers/random");
        } else {
            res = await axios.get(baseURL + "/beers/" + beerId);
        }
      setBeerDetail(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchBeerDetail();
  }, [beerId]);

  const displayBeerDetail = () => {
    return (
      <>
        <Header />
        <div>
          {beerDetail.image_url ? (
            <img
              src={beerDetail.image_url}
              alt={beerDetail.name}
              style={{ height: "300px" }}
            />
          ) : (
            ""
          )}
          <h2>{beerDetail.name}</h2>
          <p>{beerDetail.tagline}</p>
          <p>{beerDetail.first_brewed}</p>
          <p>{beerDetail.attenuation_level}</p>
          <p>{beerDetail.description}</p>
          <p>{beerDetail.contributed_by}</p>
        </div>
      </>
    );
  };

  return <div>{beerDetail ? displayBeerDetail() : <p>loading....</p>}</div>;
}

export default BeerDetail;

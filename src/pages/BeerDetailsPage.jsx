import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beerInfo, setBeerInfo] = useState(null);

  const fetchData = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeerInfo(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {beerInfo === null ? (
        <p>Loading ....</p>
      ) : (
        <>
          <img src={beerInfo.image_url} />
          <p>{beerInfo.name}</p>
          <p>{beerInfo.tagline}</p>
          <p>{beerInfo.first_brewed}</p>
          <p>{beerInfo.attenuation_level}</p>
          <p>{beerInfo.description}</p>
          <p>{beerInfo.contributed_by}</p>
        </>
      )}
    </>
  );
}

export default BeerDetailsPage;

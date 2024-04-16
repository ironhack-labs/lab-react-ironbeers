import { useParams } from "react-router-dom";
import BeerCardDetail from "../components/BeerCardDetail";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerDetailsPage() {

  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((beerDetail) => {
        setBeer(beerDetail.data)
      })
      .catch((error) => console.error("There was an error", error))
  }, [beerId])

  return (
    <div>
      {beer && <BeerCardDetail {...beer}/>}
    </div>
  );
}

export default BeerDetailsPage;

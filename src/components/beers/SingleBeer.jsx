import { useParams } from "react-router-dom";
import { getOneBeer } from "../../services/beersAPI";
import { useEffect, useState } from "react";
import Detail from "./Detail";

const SingleBeer = () => {
  const [beer, setBeer] = useState({});

  const { beerId } = useParams();

  useEffect(() => {
    getOneBeer(beerId)
      .then((res) => setBeer(res))
      .catch((error) => console.error(error));
  }, [beerId]);

  return <Detail {...beer} />;
};
export default SingleBeer;

import { useEffect, useState } from "react";
import { getRandomBeer } from "../../services/beersAPI";
import Detail from "./Detail";

const RandomBeer = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    getRandomBeer()
      .then((res) => setBeer(res))
      .catch((error) => console.error(error));
  }, []);

  return <Detail {...beer} />;
};

export default RandomBeer;

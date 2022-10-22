import { useEffect, useState } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import SingleBeerTemplate from "./SingleBeerTemplate";

function RandomBeer() {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BEERS}/random`)
      .then((res) => {
        setLoading(false);
        setBeer(res.data);
      })
      .catch((err) => {
        console.error("Error getting random beer from API", err);
      });
  }, []);

  return (
    <div className="RandomBeer pb-5 mt-4">
    <h2 className="m-3">Random Happiness</h2>
      <PacmanLoader loading={loading} size={100} color='maroon'/>
      <SingleBeerTemplate beer={beer}/>
    </div>
  );
}

export default RandomBeer;
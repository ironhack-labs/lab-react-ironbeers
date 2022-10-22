import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import SingleBeerTemplate from "./SingleBeerTemplate";

function SingleBeer() {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BEERS}/${beerId}`)
      .then((res) => {
        setLoading(false);
        setBeer(res.data);
      })
      .catch((err) => {
        console.error("Error getting beer details from API", err);
      });
  }, [beerId]);

  return (
    <div className="SingleBeer pb-5 mt-4">
      <PacmanLoader loading={loading} size={100} color='maroon'/>
      <SingleBeerTemplate beer={beer}/>
    </div>
  );
}

export default SingleBeer;


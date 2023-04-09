import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/" + beerId
        );
        setBeer(res.data);
      } catch (error) {}
    };
    fetchBeer();
  }, [beerId]);
  return beer ? (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.name}</p>
      <p>{beer.description}</p>
    </div>
  ) : (
    <p>loading</p>
  );
}

export default SingleBeer;

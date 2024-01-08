import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [data, setData] = useState();
  const { beerId } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setData(response.data);
      console.log("data:", response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div className="beerData">
          <img src={data.image_url} alt="Beer img" className="beerImg" />
          <div className="beerData">
            <h2>{data.name}</h2>
            <p>{data.tagline}</p>
            <p>Attenuation level: {data.attenuation_level}</p>
            <p>First brewed: {data.first_brewed}</p>
            <p>{data.description}</p>
            <p>{`Created by: ${data.contributed_by}`}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BeerDetailsPage;

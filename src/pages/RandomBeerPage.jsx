import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
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

  return data ? (
    <div className="beerData">
      <img src={data.image_url} alt="Beer Img" className="beerImg" />
      <div className="beerData">
        <h2>{data.name}</h2>
        <p>{data.tagline}</p>
        <p>First brewed: {data.first_brewed}</p>
        <p>{data.description}</p>
        <p>{`Created by: ${data.contributed_by}`}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default RandomBeersPage;

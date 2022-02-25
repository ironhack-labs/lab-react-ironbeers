import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BeerDetails from "../components/BeerDetails";
import axios from "axios";

function Beer() {
  const { beerId } = useParams();
  const [beerData, setBeerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeerData(response.data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    fetchData();
  }, []);

  if (!beerData) return <p>no beer</p>;
  return <BeerDetails beer={beerData} />;
}
export default Beer;

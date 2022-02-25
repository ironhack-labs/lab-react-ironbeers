import { useEffect, useState } from "react";
import BeerDetails from "../components/BeerDetails";
import axios from "axios";

function RandomBeer(props) {
  const beerId = props.beerList[Math.floor(Math.random()*props.beerList.length)]._id;
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

export default RandomBeer;

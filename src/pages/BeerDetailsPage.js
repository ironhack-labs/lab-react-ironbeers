import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const [selectedBeer, setSelectedBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setSelectedBeer(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [beerId]);

  return (
    <div className="App">
      <Header />
      <div className="image-beer-detail">
        <img src={beerId.image_url} alt="beer" />
      </div>
      <div>
        <h1>{beerId.name}</h1>
      </div>
    </div>
  );
}

export default BeerDetailsPage;

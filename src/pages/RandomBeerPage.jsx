import { useState, useEffect } from "react";
import axios from "axios";
import BeerDetailsCard from "../components/BeerDetailsCard";

function RandomBeersPage() {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Fetching error", error);
        setError(true);
      });
  }, []);

  if (error)
    return (
      <div className="text-center mt-5">
        <p className="">There is an error...</p>
      </div>
    );

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
        <p className="">Loading...</p>
      </div>
    );

  return <BeerDetailsCard beer={beer} />;
}

export default RandomBeersPage;

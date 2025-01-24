import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BeerDetailsCard from "../components/BeerDetailsCard";

function BeerDetailsPage() {
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("fetching error", error);
        setError(true);
      });
  }, [beerId]);

  if (error)
    return (
      <div className="text-center mt-5">
        <p className="">There is no item to display ...</p>
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

export default BeerDetailsPage;

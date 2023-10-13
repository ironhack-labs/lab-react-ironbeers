import { useEffect, useState } from "react";
import BeerDetailsPage from "./BeerDetailsPage";

function RandomBeersPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await fetch(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        const beerData = await response.json();
        setData(beerData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error in API: " + error.message);
      }
    };
    if (isLoading) {
      fetchRandomBeer();
    }
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <BeerDetailsPage randomId={data._id} />
      )}
    </>
  );
}

export default RandomBeersPage;

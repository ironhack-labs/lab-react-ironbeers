import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BreweryDetailsPage() {
  const { breweryId } = useParams();
  console.log("breweryId", breweryId);

  const [brewery, setBrewery] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`)
      .then((response) => response.json())
      .then((data) => setBrewery(data))
      .catch((err) => console.log(err));
  }, [breweryId]);

  return (
    <div>
      <h2>{brewery.name}</h2>
      <p>Type: {brewery.brewery_type}</p>
      <p>Country: {brewery.country}</p>
      <p>website: {brewery.website_url}</p>
    </div>
  );
}

export default BreweryDetailsPage;

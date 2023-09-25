import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [beerDetails, setBeerdetails] = useState({});

  const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/random`;

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(apiUrl);
        const {
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        } = response.data;

        setBeerdetails({
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        });
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };
    fetchBeerDetails();
  }, []);
  console.log(beerDetails);
  return (
    <div className="details">
      <div className="image-container">
        <img src={beerDetails.image_url} />
      </div>

      <div className="name-container">
        <h2>{beerDetails.name}</h2>
        <p>{beerDetails.attenuation_level}</p>
      </div>

      <div className="tagline-container">
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.first_brewed}</p>
      </div>

      <p>{beerDetails.description}</p>

      <p>{beerDetails.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;

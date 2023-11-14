import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const beersAPI_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  const [beerDetails, setBeerDetails] = useState(null);

  const { beerId } = useParams();

  const getBeer = () => {
    axios
      .get(beersAPI_URL + beerId)
      .then((response) => {
        setBeerDetails(response.data)
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getBeer();
  }, [])

  return (
    <div className="BeerDetailsPage">
        {beerDetails && (
            <>
            <img src={beerDetails.image_url} />
            </>
        )

        }


    </div>
  )
  
}

export default BeerDetailsPage;

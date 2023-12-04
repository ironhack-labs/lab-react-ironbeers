import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RandomBeersPage() {
  const [beerDetails, setBeerDetails] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random";

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  const fetchRandomBeer = () => {
    setLoading(true);
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response);
        setBeerDetails(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading random beer.</div>;
  }

  return (
    <div>
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ width: "100vw", height: "calc(100vh-50px)" }}
      >
        <div className="row">
          <div class="col">
            <h1 className="display-4" style={{ fontWeight: "500", marginBottom: "100px", marginTop: "50px"}}>
              The beer for you to disover
            </h1>
          </div>
        </div>
        <div className="row d-flex flex-row align-items-center">
          <div className="col">
            <img
              src={beerDetails["image_url"]}
              style={{ width: "300px", height: "600px", objectFit: "contain" }}
            />
          </div>
          <div className="col">
            <h1
              className="mb-3"
              style={{ marginTop: "3rem", fontSize: "90px" }}
            >
              {beerDetails.name}{" "}
            </h1>
            <h2 className="mb-5">{beerDetails.tagline}</h2>
            <h5 className="mb-4">
              {beerDetails.first_brewed} <span className="">first brewed</span>
            </h5>
            <p style={{ marginTop: "3rem", fontSize: "22px" }}>
              {beerDetails.description}
            </p>
            <Button onClick={()=> fetchRandomBeer()} variant="primary" className="w-50 mx-auto mt-5">
              <Link to="/random-beer" className="ava-links">
                Discover other beers
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RandomBeersPage;

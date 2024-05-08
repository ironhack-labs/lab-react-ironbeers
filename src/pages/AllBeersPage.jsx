import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios";
function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beerss from the Beerss API store it in this state variable.
  const [beers, setBeers] = useState(beersJSON);



  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
      } catch (error) {
        console.log('Error fetching beers:', error);
      }
    };

    getBeers();

    return () => {
    };
  }, []);
  return (
    <>
      <Search />
      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beers, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beers._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={beers.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beers.name}
                      />
                      <h5 className="card-title text-truncate mt-2">{beers.name}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{beers.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {beers.contributed_by}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllBeersPage;

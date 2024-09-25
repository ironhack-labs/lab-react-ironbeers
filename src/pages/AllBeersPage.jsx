import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../components/Search";
//import beersJSON from "./../assets/beers.json";
import { useEffect } from "react";
import axios from "axios";


//<Route path="/beers/:beerId" element={<BeerDetailsPage />} />

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  //const [beers, setBeers] = useState(beersJSON); 
  const [newBeers, setNewBeers] = useState(null)


  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.
useEffect (() => {
  axios.get(`${import.meta.env.VITE_SERVER_URL}/beers`)

  .then((response) => {
    console.log(response)
    setNewBeers(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}, [])




  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {newBeers &&
          newBeers.map((eachBeer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + eachBeer._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={eachBeer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + eachBeer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">{eachBeer.name}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{eachBeer.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {eachBeer.contributed_by}
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

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios";

//Iteration 1 | List all the beers

function AllBeersPage() {
  
  const [beers, setBeers] = useState(beersJSON);

  const getAllBeers = () => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => setBeers(response.data))
    .catch ((error)=> error)
  }
  useEffect(()=> {
    getAllBeers()
},[])

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.



  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search setBeers={setBeers}/>

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{beer.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {beer.contributed_by}
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

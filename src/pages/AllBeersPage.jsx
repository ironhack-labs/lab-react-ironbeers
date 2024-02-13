import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";




function AllBeersPage() {
  
  //const URL
  const APIurl="https://ih-beers-api2.herokuapp.com"
  // useState const
  const [allBeers, setAllBeers] = useState([]);
  //get data from the api and set it into the state const
  const getAllBeers = () => {
    axios.get(APIurl+'/beers')
    .then((response) => {
      setAllBeers(response.data);
    })
    .catch((e) => {console.log(e)});
  }
  //useEffect on the function
  useEffect(() => {
    getAllBeers()
  }, []);


  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {allBeers &&
          allBeers.map((beer, i) => {
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

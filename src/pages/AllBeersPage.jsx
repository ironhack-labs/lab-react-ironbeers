import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";



function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState(null);
  const [searchTerm, setSearchTerm]=useState("");


  useEffect(() => {

    axios.get(`${import.meta.env.VITE_SERVER_URL}/beers`)
    .then((response) => {
      console.log(response)
      setBeers(response.data)
    })
    .catch((err) => {
      console.log(err)
    })

  }, [])
  

  
  const searchedBeers = searchTerm
    ? beers.filter((beer) =>
        beer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : beers;

    if(beers===null){
      <h3>...Loading</h3>
    }
  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search  setSearchTerm={setSearchTerm}/>

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
     
      {searchedBeers && 
          searchedBeers.map((beer, i) => {
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

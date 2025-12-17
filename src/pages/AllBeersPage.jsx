import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([]);

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.
  const beersImg = [
    "https://plus.unsplash.com/premium_photo-1695658864441-ad11e5afad29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWlkbmlnaHQlMjBTdG91dCUyMGJlZXJ8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1676979223440-e97aa94f9b12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1pZG5pZ2h0JTIwU3RvdXQlMjBiZWVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1618162803775-cd146ebac4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZyb3N0Yml0ZSUyMExhZ2VyJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1723532438811-21ae2f31fca2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW1iZXIlMjBUcmFpbCUyMEFsZSUyMGJlZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1570562361185-7c18fcee253d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZyb3N0Yml0ZSUyMExhZ2VyJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1198644033/photo/a-glass-of-red-ale-on-a-dark-metal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=A0lJtUNbrm56EKpwJxsU7Bmy5x5nNvN9_0g39m91wLE=",
  ];

  const fetchAllBeers = async (url) => {
    try {
      const { data } = await axios.get(url);
      setBeers(data);
    } catch (error) {
      console.error("Error fetching beers:", error);
    }
  };

  useEffect(() => {
    const url = "https://beers-api.edu.ironhack.com/beers";
    fetchAllBeers(url);
  }, []);

  const handleSearch = (searchTerm) => {
    const url = `https://beers-api.edu.ironhack.com/beers/search?q=${searchTerm}`;
    fetchAllBeers(url);
  };

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search onSearch={handleSearch} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of " + beer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">
                        {beer.name}
                      </h5>
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

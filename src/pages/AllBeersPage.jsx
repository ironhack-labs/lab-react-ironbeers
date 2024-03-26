import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
// import beersJSON from "./../assets/beers.json";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState(null);
  const [original, setOriginal] = useState(null);

  async function displayBeers() {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setBeers(response.data);
      setOriginal(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    displayBeers();
  }, []);
  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.
  // function handleChange(event) {
  //   let searchText = event.target.value;
  //   if (searchText === "") {
  //     setBeers(original);
  //   } else {
  //     const newArr = beers.filter((elem) =>
  //       elem.name.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //     setBeers(newArr);
  //   }
  // }
  function handleChange(event) {
    const searchText = event.target.value;
    const filteredBeers = original.filter((beer) =>
      beer.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setBeers(filteredBeers);
  }
  // useEffect(() => {

  // }, []);
  if (!beers) {
    return <p>loading...</p>;
  }
  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search handleChange={handleChange} />

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
                        alt={"image of" + beer.name}
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

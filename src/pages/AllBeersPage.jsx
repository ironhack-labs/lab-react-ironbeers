import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import axios from "axios";

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'



function AllBeersPage() {

  const [beers, setBeers] = useState();

  useEffect(() => {
    getAllBeers()
  }, [])

  const getAllBeers = () => {
    axios
      .get(`${apiURL}`)
      .then(({ data }) => setBeers(data))
      .catch((error) => console.log(error))
  }

  const filterBeersByName = query => {
    axios
      .get(`${apiURL}/search?q=${query}`)
      .then(({ data }) => setBeers(data))
      .catch((error) => console.log(error))

  }


  return (
    <>
      <Search filterBeersByName={filterBeersByName} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                  <div className="card-body">
                    <Link to={"/beers/" + beer._id}>
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
                    </Link>
                    <Link to={`/edit/${beer._id}`}>
                      <button>Edit</button>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllBeersPage;

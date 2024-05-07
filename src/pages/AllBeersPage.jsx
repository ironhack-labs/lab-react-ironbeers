import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search"
import axios from "axios";
const apiURL = "https://ih-beers-api2.herokuapp.com/beers"



function AllBeersPage() {

  const [beers, setBeers] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getAllBeers()
  }, [])

  const getAllBeers = () => {
    axios
      .get(apiURL)
      .then(response => {
        setBeers(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  const filterBeers = (query) => {
    axios
      .get(`${apiURL}/search?q=${query}`)
      .then(response => {
        setBeers(response.data)
        setIsLoading(false)
      })
  }

  return (
    <>
      <Search filterBeers={filterBeers} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {
          isLoading
            ?
            <h1>ESTOY CARGANDO LA FIESTA</h1>
            :
            beers.map((beer) => {
              return (
                <div key={beer._id}>
                  <Link to={`/beers/${beer._id}`}>
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
                      <Link to={`/beers/${beer._id}/edit`}>
                        <button
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                      </Link>
                    </div>
                  </Link>


                </div>
              );
            })}
      </div>
    </>

  )
}

export default AllBeersPage

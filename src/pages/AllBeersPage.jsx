import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios";



function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState(null);

  const [searchValue, setSearchValue ] = useState("")

  //para la busqueda utilizamos otro useEffect para cuando cambiemos el campo de busqueda, en este caso para cuando Update, compDidUpdated
  useEffect(()=>{

    (searchValue === "") ?
     
    axios.get(`${import.meta.env.VITE_SERVER_URL}/beers`)
    : axios.get(`${import.meta.env.VITE_SERVER_URL}/beers/search?q=${searchValue}`)
    
    .then((response)=>{
      console.log(response)
      setBeers(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })


  },[searchValue])
  

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
// 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.
  //creamos el useEffect de llamada a la API
  //useEffect = axios.get().then((set use State)).catch( error gestion)
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/beers`)
    .then((response)=>{
      console.log(response)
      setBeers(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])


  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        { (beers !== null) ?
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
          })
          :(
            <div>
        <p>*_*...cargando</p>

            </div>)
        }
      </div>
    </>
  );
}

export default AllBeersPage;

import axios from "axios";
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

function Search({setBeers}) {
  
 const [searchParams, setSearchParams]=useSearchParams() // ?key=value. ´{key: value}
 const value = searchParams.get("q") ?? "";
  const getBeers=async()=>{
    if (!value) return; 
    try {
      const response= await axios.get(`https://beers-api.edu.ironhack.com/beers/search?q=${value}`)
      console.log(response.data)
      setBeers(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getBeers()
  },[value]) // what do we add here? states, dynamic or query params, props with data (comes from states)

  const handleChange=(e)=>{
    const inputValue = e.target.value;
    let newQuery = {} // we assume the input is empty
    if (inputValue) {
      newQuery = {
        q: inputValue // if not empty, create the query in the URL
      }
    }
    setSearchParams(newQuery);
  }

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search

          </span>

        </div>
        <input
          type="text"
          className="form-control search-bar"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;

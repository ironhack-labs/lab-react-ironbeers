import axios from "axios";
import { useState,useEffect } from "react";
function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    //const delayDebounceFn = setTimeout(() => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/search?q=${searchTerm}`)
      .then((resp)=>{
        props.setBeers(resp.data)
       })
       .catch((error)=>{
        console.log(error)
       })
    //}, 1000)

    //return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

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
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
export default Search;

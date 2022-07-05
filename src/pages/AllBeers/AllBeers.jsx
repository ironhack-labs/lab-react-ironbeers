import axios from "axios";
import React from "react";
import "./AllBeers.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllBeers = ({ apiUrl }) => {
  const [beers, setBeers] = useState(null);
  const [searchedString, setSearchString] = useState("");
  
  //API call
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBeers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBeers();
  }, []);


  let searchedProducts = null;
  if(searchedString!==""){
    searchedProducts = beers.filter((beer) =>{
        return beer.name.toLowerCase().includes(searchedString.toLowerCase());
    })
  }else{
    searchedProducts = beers;
  }

  const displayBeers = () => {
    return searchedProducts.map((beer) => (
      <div key={beer._id} className="container">
        <Link
          style={{ textDecoration: "none", cursor: "pointer" }}
          to={`/${beer._id}`}
        >
          <div className="beer-container">
            <img src={beer.image_url} alt="beer" />
            <div className="text-container">
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p className="creator">
                <span>Created by:</span> {beer.contributed_by}
              </p>
            </div>
          </div>
        </Link>
        <hr></hr>
      </div>
    ));
  };

  const handleChange = (e) => {
    
    setSearchString(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          className="search-bar"
          type="text"
          placeholder="Search a beer"
          value={searchedString}
          onChange={handleChange}
        />
      </form>

      {beers ? displayBeers() : <p>Loading...</p>}
    </div>
  );
};

export default AllBeers;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function BeersList() {
  const [list, setList] = useState([]);
  //const [showList, setShowList] = useState([])
  const [isFetching, setIsFetching] = useState(true);
  const [searchInput, setSearchInput] = useState("")
  
  /* regex for short contributed name */
    const regex = /([<])\w+/g;
    
  useEffect(() => {
    getData();
  },[]);

  // Get data from API, both the commented route and the other one render the list of beers, but the one used generates a name search according to the strings in "searchInput".
  const getData = async () => {
    try {
      const beerList = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}`
        //"https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(beerList.data);
      setList(beerList.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isFetching) {
    <p>Loading...</p>;
  }

  //I don't need to create another list to be displayed, the api allows me to simplify
  //i call the function "getData()"" to launch new calls according to the changes.
  console.log(searchInput)
  const handleSearch = (event) => {
    setSearchInput(event.target.value)
    getData()
    
  
  }

  return (
    <div>
      <NavBar />
      <div>
      <label>Search Beer</label>
        <input value={searchInput} type="text" onChange={handleSearch}/>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {list.map((eachBeer) => {
          {
            //console.log(eachBeer);
          }
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "20px",
                border: "1px solid",
                padding: "3vh",
                width: "20%",
              }}
              key={eachBeer._id}
            >
              <Link to={`/beers/${eachBeer._id}`}>
                <img
                  src={eachBeer.image_url}
                  alt=""
                  style={{ width: "100px", height: "250px", margin: "20px" }}
                />
              </Link>
              <div>
                <Link
                  to={`/beers/${eachBeer._id}`}
                  style={{
                    color: "black",
                    display: "flex",
                    textDecoration: "none",
                    margin: "20px",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  {eachBeer.name}
                </Link>
                <Link
                  to={`/beers/${eachBeer._id}`}
                  style={{
                    color: "grey",
                    display: "flex",
                    textDecoration: "none",
                    margin: "20px",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  {eachBeer.tagline}
                </Link>
                <p>
                  <b> Created by: </b>
                  {eachBeer.contributed_by.replace(regex, "").slice(0, -1)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BeersList;

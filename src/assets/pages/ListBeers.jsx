import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ListBeers() {
  // estado
  const [list, setList] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  // contact api
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // actualizar estado
      setList(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  // loading
  if (isFetching === true) {
    return <h3>...loading</h3>;
  }

  // render
  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightblue",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={"40px"} />
        </Link>
      </nav>

      <div style={{ padding: "80px 0px 0px 15%", border:'1px solid black' }}>
        {list.map((eachBeer) => {
          return (
            <div key={eachBeer._id} style={{ display: "flex", gap: "50px" }}>
            <Link to={`/beers/${eachBeer._id}`}><img
                src={eachBeer.image_url}
                style={{ width: "150px", padding: "20px"}} alt='imgBeer'
              /></Link>
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxWidth: "200px",
                }}
              >
                <h3>{eachBeer.name}</h3>
                <h5>{eachBeer.tagline}</h5>
                <p> Created by: {eachBeer.contributed_by.split("<", 1)}</p>
              </div>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}

export default ListBeers;

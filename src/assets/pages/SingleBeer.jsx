import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleBeer() {
  const {beerId} = useParams()

  const [details,setDetails] = useState([])
  const [isFetching, setIsFetching] = useState(true);

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      // actualizar estado
      // details(response);
      setIsFetching(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // loading
  if (isFetching === true) {
    return <h3>...loading</h3>;
  }



  
  return (
    <div>
      <nav style={{backgroundColor:'lightblue', height: '80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={'30px'} />
        </Link>
      </nav>
      SingleBeer
    </div>
  );
}

export default SingleBeer;

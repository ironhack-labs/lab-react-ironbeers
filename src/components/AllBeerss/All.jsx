import api from "./axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AllBeers() {
  const [beerData, setBeerData] = useState([]);

  const retriveData = async () => {
    const response = await api.get("/beers");
    return response.data;
  };

  useEffect(() => {
    const getAllBeers = async () => {
      const allBeers = await retriveData();
      if (allBeers) setBeerData(allBeers);
      console.log("las beers",allBeers)
    };
    getAllBeers();
  
  }, []);


  return (
    <div>
      <h1>Aqui vamos todas las cervezas</h1>
      {beerData.map((beer,index_beer)=>(
      <div>
     
        <Link to={`/${beer._id}`}> <img src={beer.image_url} key={index_beer}  alt='beerImage' width={'110px'} height={'210px'}></img></Link>
       
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
      </div>
      ))}
    </div>
  );
}

export default AllBeers;

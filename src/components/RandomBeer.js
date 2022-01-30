import React from "react";
import axios from 'axios'
import { getAllByPlaceholderText } from "@testing-library/react";
function RandomBeer() {

  const api = axios.create({baseURL: "https://ih-beers-api2.herokuapp.com/beers/"})

  const [beer, setBeer] = React.useState({})

  const getData = async() =>{
    const {data} = await api.get('random')
    setBeer(data)
  }

  React.useEffect(()=>{
    getData();
  }, [])

  return (
    <div>
      <h1>Random Beer</h1>
      <p>{beer.name}</p>
      <img width="150px" src={beer.image_url} atl={beer.name} />
    </div>
  );
}

export default RandomBeer;

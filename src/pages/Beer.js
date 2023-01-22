import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Beer() {
  const { beerId } = useParams()
  let [beer, setBeer] = useState([])
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(res => res.json())
    .then(data=>{ 
        setBeer(data)})
  },[])

    return (
        <>
            <Header />
            <img src={beer.image_url} height='100px' width='auto'/>
            <h1>{beer.name}</h1>
            <div>{beer.tagline}</div>
            <div>{beer.first_brewed}</div>
            <div>{beer.attenuation_level}</div>
            <div>{beer.description}</div>
            <div>{beer.contributed_by}</div>
        </>
    )
}

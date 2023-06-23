import axios from "axios";
import Header from "../components/Header";
import SingleBeer from "./SingleBeer";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Beer() {
    const [beer, setbeer] = useState(null);
    const {beerId} = useParams();
    axios
      .get(`${process.env.REACT_APP_API_URL}/beers/` + beerId)
      .then((response)=>{
        setbeer(response.data)
      })
      .catch((e)=>{console.log(e)})

    return(
        <>
        <Header />
        { beer && <SingleBeer {...beer} /> }
        { !beer && <p>loading...</p> }

        </>
    )
}
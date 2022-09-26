import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Header from "../components/Header";
import SingleBeerDisplay from "../components/SingleBeerDisplay";


const RandomBeer = () => {
    const [beer, setBeer] = useState(null)
    const params = useParams();

    const API_URL = 'https://ih-beers-api2.herokuapp.com/beers'

    useEffect(()=>{ 
        axios.get(`${API_URL}/${params.beerid}`)
              .then(response => {
                setBeer(response.data)})
              .catch(err => console.log(err))
              // eslint-disable-next-line 
        }, [])

  return (
    <>
        <Header/>
        {beer===null ? <span>Loading Beer...</span> : 
        <SingleBeerDisplay beer={beer}/>}
    </>
  )
}

export default RandomBeer
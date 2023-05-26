import Navbar from '../components/navbar'

import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

function ChosenBeerPage() {

    const {beerId} = useParams();

    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`

    const [beer, setBeers] = useState([]);

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            setBeers(response.data);
        })
    }, []) 

    return (
        <div> 
            <Navbar/>   
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <img src={beer.image_url} alt="" />
            <p>{beer.contributed_by}</p>
        </div>
    );
  }
export default ChosenBeerPage;
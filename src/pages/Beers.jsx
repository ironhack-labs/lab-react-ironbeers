import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import { Link } from 'react-router-dom';
import NewBeer from './NewBeer';



function Beers() {

const [beers, setBeers]=useState([]);

const getAllBeers = async () =>{
    try{
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        setBeers(response.data);
        console.log(response.data)
    } catch(error) {
        console.log(error)
    }
}
useEffect(() => {
    getAllBeers();
  }, []);


  return (
    <div>
        <Navbar/>
       

        {beers.map((beer)=>{
            return (
                <div key={beer._id}>
                <img src={beer.image_url} alt="" srcset="" /> 
                <Link to={`/beers/${beer._id}`}>
                <h1>{beer.name}</h1></Link>
                <h3>{beer.tagline}</h3>
                <h5>{beer.contributed_by}</h5>
                
                
                </div>
            )
        })}

    </div>
  )
}

export default Beers
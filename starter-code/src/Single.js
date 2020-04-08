import axios from 'axios';
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
 
  Link,
  useParams
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 



export default function Single(props) {
  // const [beers, setBeer] = useState([])
   let { id } = useParams();
  const [beers,setBeers] = useState([]);
  axios.get(`https://ih-beers-api.herokuapp.com/beers/${id}`).then(response=>setBeers(response.data));
  return (
    
       <div className="container">
       <div className="row" >
       
         <div className="divheader col-12">Wiki Countries</div>
         <div className="col-12">
         <img className="beer-image" src={beers.image_url}/>
         </div>
  <div className="col-12">{beers.name}</div>
  <div className="col-12">{beers.tagline}</div>
  <div className="col-12">{beers.first_brewed}</div>
  <div className="col-12">{beers.attenuation_level}</div>
  <div className="col-12">{beers.description}</div>
            
        </div>
        </div>
      
  );
}

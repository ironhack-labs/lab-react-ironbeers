import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header';
import axios from 'axios';


function BeerDetail() {
    const {id} = useParams();
    const[oneBeer, setOneBeer] = useState([]);
    
    const getOneBeer = async () => {
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
          setOneBeer(response.data);
        } catch(error) {
            console.log(error);
        };
    }
    console.log(oneBeer);
    useEffect(() => {
        getOneBeer()
       }, []);

  return (
<div>
<Header />
<div className='container'>   
    <div className='beer-detail'>
    <img className='beer-detail' src={oneBeer.image_url} alt={oneBeer.name} />
    <div className='beer-description'/>
    <div className='beer-header'>
    <div><h1>{oneBeer.name}</h1></div>
    <div><h2 style={{ color:'grey' }}>{oneBeer.attenuation_level}</h2></div>
    </div>
    <div className='beer-header-2'>
    <p style={{ color:'grey'}}>{oneBeer.tagline}</p>
    <p style={{ fontSize: "12px" }}><b>{oneBeer.first_brewed}</b></p>
    </div>
    <div className='descrip'>
    <p style={{ textAlign:"left", fontWeight:'bolder'}}>{oneBeer.description}</p>
    <p style={{ color:'grey', fontSize: "12px", textAlign:"left"}}><b>{oneBeer.contributed_by}</b></p>
    </div>
    </div>
   </div>
  </div>
 )
}





export default BeerDetail
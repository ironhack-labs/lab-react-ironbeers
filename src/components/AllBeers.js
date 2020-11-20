import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(()=>{

    async function fetchData() {

    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");

    setBeers([...response.data])

    }

    fetchData();
  }, []);
    
  
  return (
    <>
        {beers.map((count)=>(
         <Link to={`/allbeers/${count._id}`} key={count._id} className="ListAll">
             <img src={count.image_url} className="ImgAll"></img>
            <div>
                <strong>{count.name}</strong>
                <div>{count.tagline}</div>
                <div><strong>Created by:</strong>{count.contributed_by}</div>
            </div>
         </Link>
        ))}
    </>
  )
  ;
}

export default AllBeers;

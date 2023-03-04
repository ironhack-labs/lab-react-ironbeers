import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

function ListBeersPage() {
    const  [beers, setBeers] =useState([]);

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response=>{
           setBeers(response.data)
        })
    },[])
   

  return (
    <div>
     {beers.map(beer=>{
        
        return (
       <Link to={`/beers/${beer._id}`}>
        <Card key={beer._id} element={beer}/></Link>)
     })
     } 

    </div>
  )
}

export default ListBeersPage
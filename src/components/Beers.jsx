import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../../src/assets/navbar.png'
import axios from 'axios'


function Beers() {
    const [beers, setBeers] = useState([])

    const getFromApi = async () => {
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
          setBeers(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getFromApi();
      }, [])



  return (
    <div>
        <Link to={'/'}> <img src={NavBar} alt="" /> </Link>
        {beers.map((eachBeer)=>{
        return (
            <div className='bigdiv'>
            <Link to={`/${eachBeer._id}`}>
            <img src={eachBeer.image_url}   alt="beer" className='beerimg' />
            <div className='beersdiv'>
            <h2>{eachBeer.name}</h2>
            <h3>{eachBeer.tagline}</h3>
            <p>Contributed By: {eachBeer.contributed_by}</p>   
            </div>
             </Link>  
            </div>
        )
      })}
       
    </div>
  )
}

export default Beers
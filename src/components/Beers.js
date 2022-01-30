import React from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const api = axios.create({baseURL: "https://ih-beers-api2.herokuapp.com/"},)
function Beers() {
    const [beers, setBeers] = React.useState([])

    async function getBeers(){
      try{
        const {data}= await api.get('beers');
        setBeers(data)
      }catch(error){
        console.error(`Error while fetching Data ${error}`)
      }
      
    }

    React.useEffect(() =>{
      getBeers()
    },[])

  return (
    <div className='beers'>
      <h1>Beers</h1>
      {beers.map(beer => 
      <div className='single-beer' key={beer._id}>
          <h2>{beer.name}</h2>
          <img src={beer.image_url} alt={beer.name}/>
          <p>{beer.tagline}</p>
          <h4>{beer.contributed_by}</h4>
          <Link to={`/beers/${beer._id}`}>Details</Link>
        </div>)}
    </div>
  ) 
}

export default Beers;

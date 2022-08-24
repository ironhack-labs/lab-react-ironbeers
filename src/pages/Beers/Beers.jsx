import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Beers.css"

const Beers = () => {

  const [ beers, setBeers ] = useState([])

  useEffect(()=>{

    const getBeers = async ()=>{

      const url = 'https://ih-beers-api2.herokuapp.com';
      const result = await axios.get(url + '/beers');
      // console.log(result.data)

      setBeers(result.data)
    }
    getBeers()
  },[])


  return (
    <div>
      {beers.length === 0 && <p>🍻Loading...</p>}
      {
        beers.map((beer, i)=>{
          return(
            <div className="beer" key={i}>
              <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url}  alt={beer.name} />
                <div className='beer-data'>
                  <h4>{beer.name}</h4>
                  <h5>{beer.tagline}</h5>
                  <h6>Created by: {beer.contributed_by}</h6>    
                         
                </div>
                </Link>
            </div>
          )
        })
      }

    </div>
  );
}

export default Beers
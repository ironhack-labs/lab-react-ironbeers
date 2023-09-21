import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


function Allbeers() {
  const [beers, setBeers] = useState([])

  useEffect(()=>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=>{
      setBeers(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (    
    <div> 
      <Link to="/">
          <p>Home</p>          
      </Link>
      <hr />
      {beers.map((oneBeer)=>{
        return(
          <div key={oneBeer._id} className="card">
            <h1>{oneBeer.name}</h1>
          </div>
        )
      })

      }
    </div>
  )
}

export default Allbeers
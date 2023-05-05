import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Beers(){
  
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeers(response.data)
      })
  }, [])

  function handleSearch(e){
    const searchInput = e.target.value 
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}`)
      .then(response => {
        console.log(response.data)
        setBeers(response.data)
      })
  }

  return(
    <div>
      <input type="text" onChange={handleSearch}/>

      {beers.map(beer => (
        <Link key={beer._id} to={`/beers/${beer._id}`}>
          <img height={100} src={beer.image_url}/>
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </Link>
      ))}
    </div>
  )
}
export default Beers
import { useEffect, useState, Link } from "react"
import axios from "axios"

function Beers() {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        setBeers(response.data)
      })
  }, [])
  return (
    <div>
      <h2>List of Beers</h2>
      {beers && beers.map(beer => (
        <div key={beer._id} className="card">
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <img src={beer.image_url} className="beerImage" alt="beer" />
          </Link>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ))}
    </div>
  )
}

export default Beers
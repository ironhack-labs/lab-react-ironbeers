import HeaderLink from "../components/headerLink"
import { useState, useEffect } from "react"
import axios from "axios"

function Beers() {

  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((res) => {
      setBeers(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })

    // fetch("https://ih-beers-api2.herokuapp.com/beers")
    // .then((res) => res.json())
    // .then((data) => {
    //   setBeers(data)
    //   console.log(data)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }, [])

  return (
    <div>
        <HeaderLink />
        {beers.map((beer) => {
          return (
            <div key={beer._id} className="beer-card">
              <img src={beer.image_url} alt={beer.name} />
              <div className="beer-info">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </div>
          )
        })}

        
    
    </div>
  )
}

export default Beers
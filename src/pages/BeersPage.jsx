import { useEffect, useState } from "react"
import Header from "../components/Header"
import { baseUrl } from '../utils/constants'
import axios from "axios"
import BeerCard from "../components/BeerCard"

function BeersPage() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const beersFromApi = await (await axios.get(baseUrl + '/')).data
      setBeers(beersFromApi)
    }

    fetchData()
  }, [])

  return (
    <div>
      {<Header />}
      {
        beers.map(beer => {
          return (
            <div  key={beer._id}>
              {<BeerCard beerData={beer} detailed={false} />}
            </div>
          )
        })
      }
      
    </div>
  )
}

export default BeersPage
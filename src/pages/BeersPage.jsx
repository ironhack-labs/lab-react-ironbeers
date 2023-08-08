import { useEffect, useState } from "react"
import Header from "../components/Header"
import { baseUrl } from '../utils/constants'
import axios from "axios"
import BeerCard from "../components/BeerCard"
import { Link } from "react-router-dom"

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

      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link
              to={"/beers/" + beer._id}
              style={{ textDecoration: "none", color: "black" }}
            >
              {<BeerCard beerData={beer} detailed={false} />}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BeersPage
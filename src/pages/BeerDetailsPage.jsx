import { useParams } from "react-router-dom"
import BeerCard from "../components/BeerCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../utils/constants"
import Header from "../components/Header"

function BeerDetailsPage() {
  const {beerId} = useParams('beerId') 
  const [beerData, setBeerData] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const beerFromApi = await (await axios.get(baseUrl + "/" + beerId)).data
      setBeerData(beerFromApi)
    }
    fetchData()
  }, [beerId])

  return (
    <div>
      <Header />
      {beerData && <BeerCard beerData={beerData} detailed={true}/>}
    </div>
  )
}

export default BeerDetailsPage
import { useParams } from "react-router-dom"
import BeerCard from "../components/BeerCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../utils/constants"
import Header from "../components/Header"

function BeerDetailsPage(props) {
  const {beerId} = useParams('beerId') 
  const [beerData, setBeerData] = useState(null)
  const { isRandom } = props
  
  useEffect(() => {
    const fetchData = async () => {
      if (isRandom) {
        const beerFromApi = await (await axios.get(baseUrl + "/random")).data
        setBeerData(beerFromApi)
      } else {
        const beerFromApi = await (await axios.get(baseUrl + "/" + beerId)).data
        setBeerData(beerFromApi)
      }
    }
    fetchData()
  }, [beerId, isRandom])

  console.log(beerData)

  return (
    <div>
      <Header />
      {beerData && <BeerCard beerData={beerData} detailed={true}/>}
    </div>
  )
}

export default BeerDetailsPage
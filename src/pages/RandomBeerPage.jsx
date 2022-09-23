import axios from "axios"
import {useState,useEffect} from 'react'
import Header from "../components/Header"
import BeerDetails from "../components/BeerDetails"

export default function RandomBeerPage(props) {
  const [randomBeer,setRandomBeer] = useState({})
  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    async function getRandom() {
      try {
        const randomBeerFetch = await axios.get(API_URL + '/random')
        setRandomBeer(randomBeerFetch.data)
      } catch (error) {
        console.log(error)
      }
    }
  getRandom();
  // eslint-disable-next-line
  },[])
  

  return (
    <div className="main-container">

      <Header />
      <BeerDetails beer={randomBeer} />
    </div>
  )
}
import BeerDetails from "../components/BeerDetails"
import { useParams } from "react-router"
import {useState,useEffect} from "react"
import axios from "axios";
import Header from "../components/Header";

export default function BeerDetailsPage(props) {
  const {id} = useParams();
  const [beer,setBeer] = useState({})
  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    async function getCertainBeer() {
      try {
        const certainBeer = await axios.get(API_URL + '/' + id)
        setBeer(certainBeer.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCertainBeer();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="main-container">
      <Header />
      <BeerDetails beer={beer} />
    </div>
  )
}
import axios from "axios";
import {useState, useEffect} from 'react'
import BeerCard from "./BeerCard";
import SearchBar from "./SearchBar";

export default function BeersList(props) {
  const [beers,setBeers] = useState([])
  const [search,setSearch] = useState('')
  const [displayList,setDisplayList] = useState([])

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL

    async function getBeers() {
      try {
        const allBeers = await axios.get(API_URL);
        setBeers(allBeers.data)
      } catch (error) {
        console.log(error)
      }
    }

    getBeers();
  }, [])

  useEffect(() => {
    let newDisplayList = [...beers]
    newDisplayList = newDisplayList.filter(eachBeer => eachBeer.name.toLowerCase().includes(search))
    setDisplayList(newDisplayList)
  }, [search,beers])
  

  if (beers.length === 0) {
    return <span>Waiting the beers for you :)</span>
  }

  return (
    <div className="main-container">

   
      <SearchBar key="search" search={search} setSearch={setSearch} />
      <div className="beer-holder">
        {displayList.map(eachBeer => {
          return (
              <BeerCard key={eachBeer._id} beer={eachBeer} />
          )
        })}
      </div>
    </div>
  )
}
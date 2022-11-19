import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useState, useEffect} from "react"
import axios from 'axios';

function AllBeers({beers}) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value)

  const [someBeers, setSomeBeers] = useState([])

  const searchBeer = async () =>{
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      setSomeBeers(response.data)
      console.log(someBeers)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {searchBeer()}, [search])

  const removeStuff = (string) =>{
    if(typeof string === "string" && string.includes("<")){
      return string.slice(0, string.indexOf("<"))
    } else{
      return string
    }
  }


    

  return (
    <div>
      <Navbar/>
      <div className='search-form'>
      <label htmlFor="search">Search: </label>
      <input type="text" value={search} onChange={handleSearch} className="search-input"/>
      </div>
      <div className='container'>
      {search
      ? someBeers.map(beer =>{
        return(
            <div className='card'>
                <div className='img-box'>
                    <img src={beer.image_url} alt="beer" className='beer-img'/>
                </div>
                <div>
                    <Link to={`/beer/details/${beer._id}`} className="link-details">
                      {beer.name}
                    </Link>
                    <h4>{beer.tagline}</h4>
                    <p><b>Contributed by:</b> {removeStuff(beer.contributed_by)}</p>
                    <Link to={`/beer/details/${beer._id}`}>See More</Link>
                </div>
            </div>

        )
       })
       :beers.map(beer =>{
        return(
            <div className='card beer'>
                <div className='img-box'>
                    <img src={beer.image_url} alt="beer" className='beer-img'/>
                </div>
                <div>
                    <Link to={`/beer/details/${beer._id}`} className="link-details">
                      {beer.name}
                    </Link>
                    <h4>{beer.tagline}</h4>
                    <p><b>Contributed by:</b> {removeStuff(beer.contributed_by)}</p>
                </div>
            </div>

        )
       })}
      </div>
       
    </div>
  )
}

export default AllBeers
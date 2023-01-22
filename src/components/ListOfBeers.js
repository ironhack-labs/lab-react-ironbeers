import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import "./ListOfBeers.css"

import SearchBar from "./SearchBar"


export default function ListOfBeers(props){
    const apiURL = process.env.REACT_APP_API_URL
    const[allBeers,setAllBeers]=useState(null)
    
    const [queryString, setQueryString] = useState("");
    
    const [searchParams,setSearchParams] = useSearchParams()
    const nameToSearch = searchParams.get("name") || ""
   
    const {newPage} =props

    // to get all the beers from the DB
    useEffect(()=>{
      // "/beers/search?name="
      const searchQuery = nameToSearch ? `search?q=${nameToSearch}`: ""
      axios.get(apiURL+"/"+ searchQuery)
      .then((response)=>{
        const newArrayOfBeers =response.data
        console.log(response.data[1])
        setAllBeers(newArrayOfBeers)
        
      })
      .catch(e=>{
        console.log("there has been an error getting the list of beers",e)
      })
      
    },[searchParams])
    


    //for the searchbar of axios
    const [queryForAxios,setQueryForAxios]=useState("")
    // make the request depending on the query
    useEffect(()=>{
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${queryForAxios}`)
        .then(response=>{
          console.log("response from axios",response.data.length)
          setAllBeers(response.data)
        })
        .catch(e=>{
          console.log("something happend searching",e)
        })
    },[queryForAxios])

    //for the button, send the result to a new page
    const navigate = useNavigate()
    const handleClick = (e)=>{
      e.preventDefault()
      const queryUrl= "/beers/search?name="+queryForAxios
     
      navigate(queryUrl)
      
    }

    const searchedBeersArray = allBeers ?  allBeers.filter((beer) =>
    beer.name.toLowerCase().includes(queryString.toLowerCase())
    ) : []

    

    const renderAllBeers = () => {
      return (
        <>{searchedBeersArray.map(beer=>{
            return (
              <Link key={beer._id} to={"/beers/" + beer._id}>
                <div  className="beer-in-list">
                  <div className="img-beer-list-container">
                    <img
                      className="img-beer-list"
                      src={beer.image_url}
                      alt="beer"
                    />
                  </div>
                  <div className="beer-in-list-details">
                    <h2>{beer.name}</h2>
                    <h4>{beer.tagline}</h4>
                    <span><b>Created by:</b> {beer.contributed_by}</span>


                  </div>
                </div>
              </Link>
            );
        })}
          
        </>
      );
    };

    return (
      <> 
        {newPage ? <h3>this are the results for "{nameToSearch}"</h3> :
        <>  <SearchBar queryString={queryString} setQueryString={setQueryString}>
              <label htmlFor="queryString">search by Title in our local list of beers</label>
            </SearchBar>
            <hr/>
        </>
        }
        <SearchBar queryString={queryForAxios} setQueryString={setQueryForAxios}>
          <label htmlFor="queryString">search by Title in the DB</label>
          <button onClick={handleClick}>See search results in a new page</button>
        </SearchBar>
        <hr/>

        <div className="all-beers-container">
          {searchedBeersArray === null ? "loading" : renderAllBeers()}
        </div>
      </>
    );
}
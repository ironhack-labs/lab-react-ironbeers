
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

function ListBeer() {
    const [beers, setBeers] = useState([])
    const [query, setQuery] = useState("")
    const [searchResult, setSearchResult] = useState(null)
    const [loading, setLoading] = useState(true);

    const getAllBeers = async() => {
        try {
            let response = await axios.get(apiURL)
            setBeers(response.data)
            setLoading(false)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getAllBeers()
    }, [])

  
      const handleSearch = (e) => setQuery(e.target.value)
      const handleSubmit = async (e) => {
          e.preventDefault()  
          try {
           
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            setSearchResult(response.data)
          } catch (error) {
            console.log(error)
          }
         
      }


  return (
    <div>
    <Header/>
    <form onChange={handleSubmit}>
    <label htmlFor='query'>Search Beer</label>
    <input type="text" name='query' value={query} onChange={handleSearch}></input>
    

    </form>
    {loading && <p>Loading ...</p>}

    {searchResult && (
      searchResult.map((beer)=> {
        return (
          <div key={beer._id} className='card-beer' >
                <img src={beer.image_url} alt="all beers" style={{ height: "20vh" }}/>
                <div className="beer-info">
                <h3>  <Link to={`/beer/${beer._id}`}>{beer.name}</Link></h3>
                <h4>Tagline: {beer.tagline}</h4>
                <p>Created by: {beer.contributed_by} </p>
                </div>
            </div>
        )
      })
    )}

    { beers && !searchResult && (
             beers.map((beer) => {
                 return (
                  <div key={beer._id} className='card-beer' >
                <img src={beer.image_url} alt="all beers" style={{ height: "20vh" }}/>
                <div className="beer-info">
                <h3>  <Link to={`/beer/${beer._id}`}>{beer.name}</Link></h3>
                <h4>Tagline: {beer.tagline}</h4>
                <p>Created by: {beer.contributed_by} </p>
                </div>
                 </div>
                 )
             })

         )}
     </div>
   )
 }



export default ListBeer
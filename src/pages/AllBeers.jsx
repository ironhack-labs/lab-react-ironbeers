import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import DisplayBeerCard from "../components/DisplayBeerCard";
import Header from "../components/Header";
import SearchBar from "../components/SerachBar";


const AllBeers = () => {
    const [beers, setBeers] = useState(null)
    const [searchfFormState, setSearchFormState] = useState('')
    const API_URL = 'https://ih-beers-api2.herokuapp.com/beers'

    const handleOnChange = (e)=>{
      setSearchFormState( e.target.value )
  }

    useEffect(()=>{ 
        axios.get(`${API_URL}`)
              .then(response => {
                setBeers(response.data)
                ;})
              .catch(err => console.log(err))
              // eslint-disable-next-line 
        }, [])


  return (
    <div>
        <Header/>
        <SearchBar searchfFormState={searchfFormState} handleOnChange={handleOnChange}/>
        {beers===null ? <span>Loading Beers...</span> : 
        beers.filter(beerAPIFilter=>{
              return beerAPIFilter.name.toLowerCase().includes(searchfFormState.toLocaleLowerCase())
           }).map(beerAPI =><Link to={`/beers/${beerAPI._id}`}><DisplayBeerCard key={beerAPI._id} src={beerAPI.image_url} name={beerAPI.name} tagline={beerAPI.tagline} contributed_by={beerAPI.contributed_by}/></Link> )}
        
    </div>
  )
}

export default AllBeers
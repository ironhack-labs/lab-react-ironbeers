import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SingleBeer from '../components/SingleBeer';
import { PacmanLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export default function Beers() {
  const [allBeers, setAllBeers] = useState(null);
  const [filteredBeers, setFilteredBeers] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filterBeers = async(e) => {
    try{
      setSearch(e.target.value);
      const beers = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`);
      setFilteredBeers(beers.data);
    }catch(err){
      navigate("/error");
    }
    
  }
 
  const getAllBeers = async (e) => {
    try{
      const beers = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      const sortedBeers = beers.data.sort((a,b) => a.name > b.name ? 1 : -1)
      setAllBeers(sortedBeers);
      setFilteredBeers(sortedBeers);
    }catch(err){
      navigate("/error");
    }
   
  }

  useEffect(() => {
    getAllBeers();    
  }, [])

  if(filteredBeers === null){
    return (
      <div className="flex flex-row justify-center items-center place-items-center justify-items-center h-full w-full absolute">
        <div>
        {<PacmanLoader color="yellow"/>}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='flex flex-row justify-center items-center place-items-center justify-items-center'>
        <input value={search} onChange={filterBeers} placeholder="Find a beer" id="findBeerInput" type="text" class="rounded-2xl block w-11/12 px-4 mx-3 py-2 my-2 text-gray-700 bg-white border border-gray-200 rounded-mdfocus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
      </div>
      {
        filteredBeers.map(elem => <SingleBeer beer={elem} allBeers={true}/>)
      }
    </div>
  )
}

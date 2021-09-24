import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./search"



const Beers = ()=>{

    const [beersList, setBeersList] = useState([])
    const [filteredList, SetFilteredList] = useState([])

    useEffect(
            ()=>{
                axios
                .get("https://ih-beers-api2.herokuapp.com/beers")
                .then(
                    response =>{ setBeersList(response.data); SetFilteredList(response.data)
                    } 
                )
            },
    [])


    const filter = (filterInfo)=>{
        console.log(filterInfo)
        let orginalList = beersList

        if(filterInfo !== ""){
            SetFilteredList(
                orginalList.filter(
                    beer=>beer.name.startsWith(filterInfo)
                )
            );
        }else{SetFilteredList(beersList)}

    }
return(
    <>
    <SearchBar filter={filter}/>

    
  {  filteredList.map( beer =>(
        
        <div className="beerCard" key={beer._id}>
            <img src={beer.image_url} alt="" />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <h6>{beer.contributed_by}</h6>

            <Link to={`/random-beer/${beer._id}`}>More details</Link>
        </div>
       ))}
       </>  
    )
    
    
}

export default Beers
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

export default function AllBeersPage(){
    const [allBeers, setAllBeers] = useState([]);
    const [searching, setSearching] = useState(false)
    async function getBeerApi(){
        const allBeers = await axios.get(apiURL)
        setAllBeers(allBeers.data);
        console.log(allBeers.data);
    }
    useEffect(()=>{

        getBeerApi()
    }, [])

    function searchBeers(e){
        if(e.target.value===""){
            getBeerApi()
            setSearching(false)

        }
        async function search(){
            setSearching(true)
            const foundBeers = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
            setAllBeers(foundBeers.data)
            setSearching(false)

        }
        search()
    }
    return(
        <div className="all-beers-container">
            <input type="text" placeholder="Search Beers" onChange={searchBeers}  id="search-bar"/>
                <div className="all-beers-main-cont">
                {allBeers.length>0 && allBeers.map((beer, i)=>{
                    return <Link key={beer._id} to={`/beers/${beer._id}`}><BeerComp beer={beer}/></Link>
                })}
                </div>
        </div>
    )
}

function BeerComp({beer}){
   const {image_url, name, tagline, contributed_by} = beer
    return (
        <div className="beer-cont-1">
            <h2>{name}</h2>
            <img src={image_url}/>
            <p><i>{tagline}</i></p>

            <p>Contributed by:<br/>{contributed_by}</p>
        </div>
    )
}
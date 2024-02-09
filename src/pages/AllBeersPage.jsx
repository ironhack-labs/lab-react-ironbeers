import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [allBeers, setAllBeers] = useState([])
    const [query, setQuery] = useState('')


    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beers)=>{
            console.log(beers.data)
            setAllBeers(beers.data)
        }) 
    }, [])

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((filteredBeers)=>{
            console.log(query)
            setAllBeers(filteredBeers.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [query])

    return(
        <div id="AllBeersPage">
        <input type="text" placeholder="search" id="searchbar" onChange={(e)=>{setQuery(e.target.value)}} />
            {!allBeers.length && <p className="loading">...loading</p>}
            {allBeers && (
            
                    allBeers.map((oneBeer)=>{
                        return(
                        <Link key={oneBeer._id} to={`/beers/${oneBeer._id}`}>
                            <div className="beer-wrapper">
                            <div className="img-wrapper">
                        <img src={oneBeer.image_url} alt={oneBeer.name} />

                            </div>
                        <div className="beer-info">
                        <h2 className="all-beers-name">{oneBeer.name}</h2>
                        <h3 className="all-beers-tagline">{oneBeer.tagline}</h3>
                        <p className="all-beers-contributed"><strong>Created by: </strong>{oneBeer.contributed_by}</p>

                        </div>
                        </div>
                            
                        </Link>)

                    })
            
            )}
        </div>
    )
}

export default AllBeersPage;

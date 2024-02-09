import { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";

function AllBeersPage() {
    const [allBeers, setAllBeers] = useState([])
    const [query, setQuery] = useState('')

    // function handleSearch(e){
    //     setQuery(e)
    //     axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    //     .then((filteredBeers)=>{
    //         console.log(filteredBeers.data)
    //         setAllBeers(filteredBeers.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // }

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beers)=>{
            // console.log(beers.data)
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
        <div>
        <input type="text" placeholder="search" onChange={(e)=>{setQuery(e.target.value)}} />
            {!allBeers.length && <p>...loading</p>}
            {allBeers && (
            
                    allBeers.map((oneBeer)=>{
                        return(
                        <Link key={oneBeer._id} to={`/beers/${oneBeer._id}`}>
                            <div className="beer-wrapper">
                            <div className="img-wrapper">
                        <img src={oneBeer.image_url} alt={oneBeer.name} height={200} />

                            </div>
                        <div className="beer-info">
                        <h2>{oneBeer.name}</h2>
                        <p>{oneBeer.tagline}</p>
                        <p>Created by: {oneBeer.contributed_by}</p>

                        </div>
                        </div>
                            
                        </Link>)

                    })
            
            )}
        </div>
    )
}

export default AllBeersPage;

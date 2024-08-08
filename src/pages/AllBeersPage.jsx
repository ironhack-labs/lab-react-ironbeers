import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



function AllBeersPage() {

    const [beers, setBeers] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((allBeers) => {
                setBeers(allBeers.data)
            }).catch((err) => { console.log(err) })

    }, [])


    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
            .then((allBeers) => {
                setBeers(allBeers.data)
            }).catch((err) => { console.log(err) })

    }, [search])


    return (
        <div>
            <form>
            <label>
                <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
            </label>
            </form>
            <div className="allBeers">
            {beers && (
                beers.map((beer) => {
                    return ( 
                        beer.image_url && (
                        <div className="beer">
                            <Link style={{color: 'white'}} to={`/beers/${beer._id}`}>
                            <h2 key={beer.name}>{beer.name}</h2>
                            <img src={beer.image_url} alt="" />
                            </Link>
                        </div>
                        )
                    )
                })
            )}
            </div>
        </div>
    )
}

export default AllBeersPage
import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'
import Search from '../components/Search'

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function BeerList() {
    const [beers, setBeers] = useState([])
    const [beersSearch, setBeersSearch] = useState(null)

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndpoint)
            console.log(res.data)
            setBeers(res.data)
            setBeersSearch(res.data)
        }
        apiCall()
    }, [])

    const searchHandler = (searchData) => {
        if(searchData === ""){
            setBeersSearch(beers)
        }
        console.log(searchData)
        const newArray = beers.filter((beer) => {
            return beer.name.toLowerCase().includes(searchData)
        })

        setBeersSearch(newArray)
    }

    return (
        <div>
            <NavBar />
            <Search onSearch={searchHandler} />
            <h1>Beers</h1>
            {beersSearch  ? beersSearch.map(beer => {
                return (
                    <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt="error101" /></Link>
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>Ceated by: {beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt="error101" /></Link>
                    </div>
                ) 
            }): "loading..."}
        </div>
    )
}

export default BeerList

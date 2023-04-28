import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"
import Header from "../components/Header";
import { useSearchParams } from 'react-router-dom'


const AllBeers = () => {

    const [beers, setBeers] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()



    const beerSearch = searchParams.get("beers");

    const handleValue = (e) => {
        setSearchParams(e.target.value)
    }

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchParams}`)
        .then(res => {
            setBeers(res.data)
            console.log(res.data)
        })
    }, [])

    const imgStyle = { 
        width: 50,
        fontSize: 10

    }


  return (
    <div>

    <Header />
    <input onChange={handleValue} value={beerSearch}></input>
    {
    beers.map(beer => 
    (
        <div key={beer._id}> 
      
            <Link to={`/beers/${beer._id}`}>
            <img  style={imgStyle} src={beer.image_url} /></Link>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <h5> <strong>Created By :</strong> {beer.contributed_by}</h5>
                
        </div>
    ))
}


    </div>
  )
}

export default AllBeers




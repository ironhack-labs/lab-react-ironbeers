import Axios from 'axios'
import React, { useEffect, useState }from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'


// const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

export default function AllBeers(){
    const [beers, setBeers] = useState()

    useEffect(() => {
        async function getBeers(){
            const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(data)
            console.log(data)
        }

        getBeers()
       
    }, [])

    return(
        <div>
            <Link to='/' style={{margin: "10px", textDecoration:"none", color: "white", backgroundColor:"turquoise", padding:"20px", borderRadius:"10px"}}>
                Home
            </Link>
            <h1>All Beers</h1>
            <hr/>
            {beers.map((beers) => 
            <Link to={`/beers/:beerId`}>
                <div>
                    <img src={beers.image_url}/>
                    <div>
                        <h2>{beers.name}</h2>
                        <p>{beers.tagline}</p>
                        <small>{beers.contributed_by}</small>
                    </div>
                </div>
            </Link>)}
            <hr/>
        </div>
    )
}
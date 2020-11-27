import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.js'
import {getBeers} from '../services/getAllBeers'


const AllBeers = () => {
    const [beer, setBeers]= useState(null)
        useEffect(()=>{
            async function getTheBeers(){
                const data = await getBeers()
                console.log(data)
                setBeers(data)
            }
            getTheBeers()
        }, [])
        
    return (
        <div>
        <Header/>
            {beer ? <ul>
            {beer.map((beers, i) => 
            <li style={{listStyleType:'none'}}>
                <Link to={`/beers/${beers._id}`} style={{textDecoration:'none', color:'black', borderBottom: 'solid gray 1px'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={{width: '90px', margin:'5px'}}>
                            <img src={beers.image_url} style={{height:'110px'}} />
                        </div>
                        <div style={{width: '200px', margin:'1px'}}>
                            <h2>{beers.name}</h2>
                            <p>{beers.tagline}</p>
                            <small>Created by: {beers.name}</small>
                        </div>
                    </div>
                
                </Link>
                <hr/>
            </li>)}
        </ul> 
        :
        <p>Loading...</p>}
        </div>
    )
}
export default AllBeers


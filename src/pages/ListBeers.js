import React, {useState, useEffect} from 'react'
import axios from 'axios'

const baseURL='https://ih-beers-api2.herokuapp.com/beers'


function ListBeers() {


    const [beers, setBeers]= useState(null)

    useEffect(()=>{
        async function getBeers(){
            const {data:{results}}=await axios.get(baseURL)
            setBeers(results)
        }
        getBeers()
    },[])


    return (
        <div>
            <h1>List Beers</h1>

            
        </div>
    )
}


export default ListBeers

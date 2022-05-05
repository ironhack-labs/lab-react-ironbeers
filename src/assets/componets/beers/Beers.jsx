import Beercard from "../BeerCard"
import apiBeers from "../../../services/Api.service"
import { useState, useEffect } from 'react'

const Beers =()=>{

        const [beers, setBeers] = useState([])
    
        useEffect(() => {
            loadBeers()
        }, [beers])
    
        const loadBeers = () => {
            apiBeers
                .getAllBeers()
                .then(({ data }) =>setBeers(data))
                .catch(err => console.log(err))
        }

    return( 
    <>
    <h1>List Of Beers</h1>
     { beers.map(elm=>{
       return(<Beercard {...elm}/>)
      })}
      </>
        
)

}
export default Beers
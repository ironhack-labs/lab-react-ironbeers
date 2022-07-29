import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function BeersList() {

const [beers, setBeers] = useState(null);

  useEffect( () => {
    fetchBeers();
  }, []);

  const fetchBeers = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data)
        const allBeers = response.data;
        setBeers(allBeers);
      })
      .catch((e) => {
        console.log(e);
      });
  }
    console.log (beers)
    
    return (
        <>
        <h1> This is the list of all the beers</h1>
        {beers?.map( element => {
            return(
                <div key="">
                    <img src={element.image_url} alt=""/>
                    <p>Name: {element.name}</p>
                    <p>Tagline: {element.tagline}</p>
                    <p>Contributed by: {element.contributed_by}</p>
                    <NavLink to={element._id}>More details</NavLink>
                </div>
            )
        })} 
        </>
        
    )
}

export default BeersList
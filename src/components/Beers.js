import { useEffect, useState } from "react";
import axios from 'axios';
import BeerCard from "./BeerCard";


function Beers() {

  const [beers, setBeers] = useState([]);

  useEffect( () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + 'beers')
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  });



  return (
    <>
      <h1>all the beers....</h1>

      {beers.length === 0
        ? <p>loading...</p>
        : <>
          {beers.map((element) => {
                  return <BeerCard data={element}/>
            })} 
        </>
      }
    </>
  );
}

// {beers.map((element) => {
//         <BeerCard data={element}/>
//       })} 


export default Beers;

import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


export default function ListBeers() {
    const [beers, setBeers] = useState([])

useEffect(() => {
axios
.get(`${process.env.REACT_APP_APIURL}`)
.then( response => {
    setBeers(response.data)
    console.log(response.data)
})
.catch(err => console.log("error getting beers from API", err))
},[])


return (
    <div>
      <h1>Beers List</h1>
      <ul>
        {beers ? (
          beers.map((beer) => {
            console.log(beer);
            return (
              <div key={beer.id}>
              <img src={beer.image_url} alt={beer.name} />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Created by {beer.contributed_by}</p>
             
                <Link to={`/${beer._id}`}>More Details</Link>
              </div>
            );
          })
        ) : (
          <p>Loading beers...</p>
        )}
      </ul>
    </div>
  );
}
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useMemo, useState } from "react";


function Beer() {
  const [beers, setBeers] = useState(null);
  const [query, setQuery] = useState("")
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredBeer = useMemo (()=>{
    return beers.filter((element) =>{
      return element.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [beers, query])

const renderBeers = ()=>{
    return(
        <>
    {filteredBeer.map((beer) => {
        return (
          <section key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}> see details</Link>
          </section>
        );
      })}
      </>
    )
    }   

  

  return (
    <>
    <header>
        <Link to={"/"}> Home</Link>
        <input type= "search" value={query} onChange={e => setQuery(e.target.value)} />
    </header>
      {beers ? renderBeers()
      : <h1> Loading .....</h1>}
      
    </>
  );
}

export default Beer
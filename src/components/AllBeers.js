import { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const getContributorName = (contributor) => {
    const startIndex = contributor.indexOf("<");
    if (startIndex !== -1) {
      return contributor.slice(0, startIndex).trim();
    }
    return contributor;
  };

  


  return (
    <section>
        <h1>All Beers</h1>
          
           
      
      <hr/>
      {beers.map((element) => {
        return (
        <div key={element._id}>
            <img src={element.image_url} alt={element.name}/>
            <Link to= "/beers/:beerId">
          <h2>{element.name}</h2>
          </Link>
          
          <h4>{element.tagline}</h4>
          <p>Created by: {getContributorName(element.contributed_by)}</p>
          <hr/>
        </div>
      )
      })}
     
        
    </section>
  );
}

export default AllBeers;

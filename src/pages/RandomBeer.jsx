import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"; 


function BeerPage(props) {
    const [ fetching, setFetching ] = useState(true);
    const [ foundBeer, setFoundBeer ] = useState([]);
    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/random';
    
    useEffect( () =>  {
        const fetchData = async ()=> {
            const responseData = await fetch(apiUrl)
            const beer = await responseData.json()
            setFoundBeer(beer);
            setFetching(false);   
        }
        fetchData();
    }, [setFoundBeer, apiUrl]);  


  return (
    <>
      {props.children}
      <div className="container mw-100 m-0 p-0">
      {fetching ?  <div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div> :
        <div className="card" id="beer-info-card" key={foundBeer._id}>
             <img className="card-img-top m-3" id="beer-info-image" src={foundBeer.image_url} alt={foundBeer.name}></img>          
          <div className="card-body">  
          <div className="d-flex justify-content-between">
              <h2 className="card-title">{foundBeer.name}</h2> <h2 className="beer-level">{foundBeer.attenuation_level}</h2>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="card-subtitle mb-2" id="beer-tagline">{foundBeer.tagline}</h5> <small className="first-brew">{foundBeer.first_brewed}</small>
          </div>
          <p>{foundBeer.description}</p>
            <p className="card-text"> {foundBeer.contributed_by}</p>
          </div>
        </div>}
      </div>
    </>
  );
}
 
export default BeerPage;
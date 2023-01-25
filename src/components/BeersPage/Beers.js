import { useState, useEffect } from "react";     
import axios from "axios";
import { Link } from "react-router-dom";
import './Beers.css';
import Header from "../Header/Header";


function Beers (){
    const [beers, setBeers] = useState([]);

const [searchInput, setSearchInput]=useState("")

const filteredBeers = () => {

  let filterBeers = beers

  if(searchInput) {
    filterBeers = filterBeers.filter((beer) => 
      beer.name.toLowerCase().includes(searchInput.toLowerCase())
    )
 
  }
return filterBeers
}

    useEffect(() => {                                
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            console.log('response.data', response.data);
            setBeers(response.data)
          });
        
      }, [] ); 

      return (
        <div>
        
       <Header/>
        
<input
value={searchInput}
onChange={(e) => setSearchInput(e.target.value)}
/>

          <h3>List of beers</h3>
          {filteredBeers().map((beer) => (
            <div key={beer._id} className="beerCard">
              <img src={beer.image_url} alt="beer" style={{width: "50px"}} />
             <div className="beerInfo">
              <Link to={`/beers/${beer._id}`}>{beer.name}</Link> 
              <p className="beerTagline">{beer.tagline}</p>
              <p><strong>Created by:{beer.contributed_by}</strong></p>
              </div>
            </div>
          ))}
          
        </div>
      );

}
export default Beers;
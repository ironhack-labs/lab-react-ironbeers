import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// import Searchbox from "../components/Searchbox";
import { Link } from "react-router-dom"; 
import Searchbox from "../components/Searchbox";

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

function BeersPage(props) {
    const [fetching, setFetching] = useState(true);
    const [beerListCall, setBeerListCall] = useState([]);
    const [beerListSearch, setBeerListSearch] = useState([]);

    useEffect( () =>  {
        const fetchData = async ()=> {
            const responseData = await fetch(apiUrl)
            const beers = await responseData.json()
            setBeerListCall(beers);
            setBeerListSearch(beers);
            console.log(beers);
            setFetching(false);
        }

        fetchData();
    }, []);  

    const searchBeerList = (q) => {
        if(q === ''){
            setBeerListSearch(beerListCall);
        }else{
        const fetchData = async ()=> {
            const responseData = await fetch('https://ih-beers-api2.herokuapp.com/beers/search?q='+q)
            const beers = await responseData.json()
            setBeerListSearch(beers);
            setFetching(false);
            }
        fetchData();
        }
      }    

  return (
    <>
      {props.children}
      <div className="container mw-100 m-0 p-0">

        <Searchbox beerSearch={searchBeerList}/>   

      {fetching && <div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div> }
      {beerListSearch.map(beer=>(
        <div className="card" id="beer-list-card" key={beer._id}>
             <img className="card-img-top m-3" id="beer-list-image" src={beer.image_url} alt={beer.name}></img>
          <div className="card-body">
              <h1 className="card-title"><Link className="stretched-link" to={'/beer/'+beer._id}>{beer.name}</Link></h1>
            <h1 className="card-subtitle mb-2" id="beer-tagline">{beer.tagline}</h1>
            <p className="card-text"><strong>Created by:</strong> {beer.contributed_by}</p>
          </div>
        </div>
                ))}
      </div>
    </>
  );
}
 
export default BeersPage;
import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function BeersList() {
  
const [beersList, setBeersList] = useState([])
const [beerSearch, setBeerSearch] = useState("")
    const getBeersList = async () => {
        try {
          let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
          setBeersList(response.data);
          //setBeerSearch(response.data)
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
      
      /* 
      const getBeersSearch = async () => {
        try {
          let responseSearch = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q={${beerSearch}}`);
          
          
          beersList.filter((element)=>element.name.toLowerCase().includes(beerSearch.toLowerCase()))
          setBeersList(beerSearch)
          setBeerSearch(beerSearch)
          
        } catch (error) {
          console.log(error);
        }
      };
      
      const handleSearch = (e) =>{
        setBeerSearch(e.target.value)
        setBeersList(e.target.value)
    }
 */


      
      useEffect(() => {
        getBeersList()
        //getBeersSearch()
      }, []);

      





    return (
    <div>
    <NavBar/>
   
    {/* <input value={beerSearch} type="text" onChange={handleSearch} /> */}
{beersList.map((element)=>{

return(
    <div key={element._id} className="beerList">
    <Link to={`/beers/${element._id}`} className="beerListLink">
        <div className='beerListImg'>
        <img src={element.image_url} alt="something" />
        </div>
        <div className='beerListInfo'>
        <h1>{element.name}</h1>
        <h3>{element.tagline}</h3>
        <h4><b>Contributed by:</b> {element.contributed_by}</h4>
        
        </div>
        </Link>
    </div>
)

})}




    </div>
  )
}

export default BeersList
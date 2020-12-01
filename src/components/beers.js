import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../components/allbears.css'
import { Link } from 'react-router-dom';
import Header from './Header.js' 


const Beers = () => {
 
    const [AllBeers, setBeerState] = useState([])

   useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(AllBeers => {
       // console.log(AllBeers);
        setBeerState(AllBeers.data)
    })
    .catch((error)=> "Error while fetching the beer from API")
   })


   return (
    <div>
       <h1>All Beers</h1> 
       <Header location={"./images/home.png"}/>
       {AllBeers.length ? AllBeers.map((eachBeerItem, index) => {
           return (
               <div className="beer-card" key={index}>
                <img src={eachBeerItem.image_url} alt="beerimage" className="beer-image"/>
                   <div className="beer-card">{eachBeerItem.name}</div>
                   <div className="beer-card">{eachBeerItem.tagline}</div>
                   <div className="beer-card">{eachBeerItem.description}</div>   
                   <div className="beer-card">{eachBeerItem.contributed_by}</div>
                   <Link to={`/beers/${eachBeerItem._id}`}>Details</Link>
                   <br/>
                   <br/>                   
               </div>
           )
       }) : <p>Loading</p>}
          
        
    </div>
)
  
}

export default Beers


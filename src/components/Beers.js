
 import { NavLink } from 'react-router-dom';  
 import Header from "./Header";

 
 
 function Beers(props) {
 
     const beersArr = props.beersArr; 
   
 
     return (
         <section className="BeersList">
             <Header />
         <h3>List of beers</h3>
    
       
         {beersArr.map((beer) => (
           <div key={beer._id} className="beer-summary">
             <img src={beer.image_url} alt="beer" />
             <h3>{beer.name}</h3>
             <h3>{beer.tagline}</h3>
             <h3>{beer.contributed_by}</h3>
             <NavLink to={`/beers/${beer._id}`}>More Details</NavLink>
           </div>
         ))}
         
    
 
 
 
       </section>
     )
 }
 
 
 export default Beers;
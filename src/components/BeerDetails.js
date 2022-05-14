
    
import { useParams } from "react-router-dom";             
import Header from "./Header";
import { Link } from "react-router-dom";

function BeerDetails(props) {

    const { beerId } = useParams(props);

const beerArr = props.beersArr;

const beerDetails = beerArr.find((beer) => {
    return beer._id === beerId;
});


const beer = beerDetails;


const renderDetails = () => {
    return (
        
          <div key={beer._id} className="card">
            <h1>{beer.name} </h1>
            <img src={beer.image_url} alt="beer" />
           <h2>{beer.tagline}</h2>   <br />      
             <h2>{beer.first_brewed}</h2> 
            <h2>{beer.attenuation_level}</h2> 
 <h2> {beer.description}</h2>
   <h2>   {beer.contributed_by}</h2>

   <Link to={`/beers`}>Back to List of Beers</Link>
            </div>
        
    );
}


return (
    <>
       <Header />
        {beerDetails ? renderDetails() : <p>Loading...</p>}
    </>
);
}


export default BeerDetails;
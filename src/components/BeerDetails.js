import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function BeerDetails(props){

    const {beerId} = useParams();

  
     const beersArr = props.beersList;
     
     
     const details = beersArr.find((beer) => {
        
        return beer._id == beerId;

     })
     
    console.log (details)

   const renderDetails = () => {
    return (

        <>
        <header>
        <NavLink to="/">Home</NavLink> <br/> <br/>
        </header>
        <div key={details._id}>
         <img src={details.image_url} alt={details.title} />
            <h1>{details.name} </h1>
            <h3>{details.tagline}</h3> <br />
           <p>{details.first_brewed}</p>
           <p>{details.attenuation_level}</p> 
           <p>{details.description}</p> <br />
           <p>{details.contributed_by}</p>
           </div>


            
        </>
    );
}

      return (
        <>
            {details ? renderDetails()  : <p>Loading...</p>}
        </>
    );
}


export default BeerDetails;
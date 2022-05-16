import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import "./BeerDetails.css" 


function BeerDetails(props) {
  const { beers } = props;
  const { beerId } = useParams();

  const [details, setDetails] = useState('');

  useEffect(() => {
    const beerDetails = beers.find(
      (beer) => beer._id === beerId
                     );
    setDetails(beerDetails);
    console.log('Beer Details:',beerDetails)
                    }, [beers, beerId]);


  return (
    <div className="BeerDetails">
         <img src={details.image_url} alt={details.name}/>
          <h1>{details.name} </h1>
          <div>Tagline: {details.tagline} </div>
          <div>First Brewed: {details.first_brewed} </div>
          <div>Tagline: {details.tagline} </div>
          <div>Attenuation Level: {details.attenuation_level} </div>
          <div>Description: {details.description} </div>
          <div>contributed By: {details.contributed_by} </div>
    </div>
)}


export default BeerDetails;
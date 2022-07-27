import {useState, useEffect} from 'react';
import {useParams, Link } from 'react-router-dom';

function BeerDetails(props){
const { beers } = props;
const { beerId } = useParams();
const [foundBeer, setFoundBeer] = useState(null);


useEffect(() => {
    console.log('useEffect triggered');
    const beer = beers.find((beerObj) => {
      return beerObj._id === beerId;
    });

    console.log(beer, beerId);

    if (beer) {
      setFoundBeer(beer);
    }
  }, [beerId, beers]);

    return(
        <>
        {!foundBeer && <h3>Beer not found!</h3>}
        {foundBeer && (
    <div className="oneBeerDetails">

        <h1> {foundBeer.name}</h1>
        <h2>{foundBeer.tagline}</h2>
        <p>{foundBeer.description}</p>
        <p>First Brewed On: {foundBeer.first_brewed}</p>
        <p>Attenuation level: {foundBeer.attenuation_level}</p>
        <p>Contributed By: {foundBeer.contributed_by}</p>

        </div>
        
        )}
        </>
    )
}
export default BeerDetails;
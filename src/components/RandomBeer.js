import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RandomBeers(props){
    const [randomBeer, setrandomBeer] = useState(null);

    const { id } = useParams();
    console.log(id);
  
    useEffect(() => {
      randomBeer === null
        ? props.getBeers(`/random`)
        : console.log("already called");
      setrandomBeer((prevBeers) => {
        return props.randomBeer;
      });
    }, [props]);
  
    console.log(randomBeer);
  
    return (
      <>
        {randomBeer === null ? (
          <h3>Loading...</h3>
        ) : (
          <div className="beer-details">
            <img src={randomBeer.image_url} />
            <h1>{randomBeer.name}</h1>
            <h4>{randomBeer.tagline}</h4>
            <h4>First brewed: {randomBeer.first_brewed}</h4>
            <h4>Attenuation Level: {randomBeer.attenuation_level}</h4>
            <p>{randomBeer.description}</p>
            <p>Contributed by:{randomBeer.contributed_by}</p>
          </div>
        )}
      </>
    );
}


export default RandomBeers;
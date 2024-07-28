import { useEffect, useState  } from "react";

function RandomBeersPage() {
    
    const [beer, setBeers] = useState(null);

    useEffect(() => {
      fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => response.json())
        .then(data => {
          setBeers(data);
        })
        .catch(error => console.log(error));
    }, []);
  
    if (!beer) return <div>Loading...</div>;

  
    return (
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </div>
    );
  }
  
  export default RandomBeersPage;
  
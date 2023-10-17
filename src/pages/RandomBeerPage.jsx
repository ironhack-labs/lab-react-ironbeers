
import React, { useState, useEffect } from "react"; 

function RandomBeersPage() {

  const [beer, setBeer] = useState(null)



  useEffect(() => {
    
    fetch("https://ih-beers-api2.herokuapp.com/beers")  
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const randomIndice =  Math.floor(Math.random() * data.length)
        const randomBeer = data[randomIndice]
        setBeer(randomBeer)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  if(!beer){
    return <h1>Loading...</h1>
  }

  return (

    <div>
      
      <h1>Detalles de la Cerveza</h1>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>Primera elaboración: {beer.first_brewed}</p>
      <p>Atenuación: {beer.attenuation_level}</p>
      <p>Descripción: {beer.description}</p>
      <p>Contribuido por: {beer.contributed_by}</p>

    </div>

  );

}

export default RandomBeersPage;

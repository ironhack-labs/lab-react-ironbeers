import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function Beer (props) {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();  

  const getBeer = () => {        
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        const oneBeer = response.data;
        setBeer(oneBeer);
      })
      .catch((error) => console.log(error));
  };
  useEffect(()=> {                
    getBeer();
  }, [] );

 
  
  return (
    <div className="">
      {beer && (
        <>
        <div className="card-single">
          <div className="image">
            <img src={beer.image} width={50} height={100}></img>
          </div>
          <div className="content">
            <h2>{beer.name}</h2>
            <em>{beer.tagline}</em>
            <i>{beer.first_brewed}</i>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
       
        </>
      )}

    </div>
  );
}

export default Beer;

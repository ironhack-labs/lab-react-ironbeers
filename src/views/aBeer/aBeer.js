import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../../useFetch';

const Abeer = () => {
  const { id } = useParams();
  const {data : beer} = useFetch("https://ih-beers-api2.herokuapp.com/beers/" + id)
  const history = useHistory()

  const handleClick =()=> {
      fetch("https://ih-beers-api2.herokuapp.com/beers/" + id,{
          method:"DELETE",
      }).then(()=>{
        history.push("/beers")
      })
  }
  return (
    <div>
      {beer && (
          <div>
                <img src={beer.image_url} width="70" height="230" />
                <h1>{beer.name}</h1>
                <h3 className="tagline">{beer.tagline}</h3>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p ><b>Create By:</b> {beer.contributed_by}</p>
                <button onClick={handleClick}>Delete</button>
          </div>
           
      )}
    </div>
  );
};

export default Abeer;

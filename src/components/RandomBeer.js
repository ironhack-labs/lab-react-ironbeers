import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Head from './Head';

const RandomBeer = () => {
const [randomBeer, setRandomBeer] = useState([]);
const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      setRandomBeer(response.data);
    } catch (error) {
      window.alert('Houve um erro');
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);
  if (!randomBeer){
    return ''}

  console.log('random', randomBeer);

    return(
        <div>
             <div>
            <Head/>
            </div>
            <div className="display">
            
                <figure className="display-fig">
                <img src={randomBeer.image_url} className="display-img" alt=""/>
                </figure>
              
              <div className="display">
                  <div className="disp-name">
                  <p className="display-name">{randomBeer.name}</p>
                    <p className="display-attenuation">{randomBeer.attenuation_level}</p>
                   
                  </div>
                <div className="disp-tag">
                <p className="display-tagline">{randomBeer.tagline}</p>
                <p className="display-brewed">{randomBeer.first_brewed}</p>
                  </div>
                  <div className="disp-descr">
                  <p className="display-description">{randomBeer.description}</p>
                  <p className="display-created">{randomBeer.contributed_by}</p>
                
                  </div>
                </div>
            </div>
        </div>
)
}
export default RandomBeer;
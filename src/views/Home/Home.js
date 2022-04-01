import React from 'react';

import Homecard from '../../components/HomeCard/HomeCard';
import image1 from '../../assets/beers.png'
import image2 from '../../assets/random-beer.png'
import image3 from '../../assets/new-beer.png'

const Home = () => {

  const description = "Lorem fistrum ese pedazo de caballo blanco caballo negroorl va usté muy cargadoo quietooor pecador benemeritaar jarl. "


  return (
    <div className='home'>
      <Homecard 
        img={image1} 
        title="All Beers " 
        description={description}
        link={"/allBeers"}
      />

      <Homecard 
        img={image2} 
        title="Random Beer "
        description={description}
        link={"/random"}  
      />
  
      <Homecard 
        img={image3} 
        title="New Beer " 
        description={description}
        link={"/beers/new-beer"}
      />
    </div>
  );
};

export default Home;
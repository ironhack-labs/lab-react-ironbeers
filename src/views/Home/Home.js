import React from 'react';
import { Link } from 'react-router-dom';

import Homecard from '../../components/HomeCard/HomeCard';
import image1 from '../../assets/beers.png'
import image2 from '../../assets/random-beer.png'
import image3 from '../../assets/new-beer.png'

const Home = () => {

  const description = "Lorem fistrum ese pedazo de caballo blanco caballo negroorl va usté muy cargadoo quietooor pecador benemeritaar jarl. Al ataquerl caballo blanco caballo negroorl ahorarr está la cosa muy malar"


  return (
    <div>
        <h1>Welcome to ironbeers!</h1>
        <Link to="/allBeers">
        <Homecard img={image1} title="All Beers " description={description}/>
        </Link>

        <Link to="/random">
        <Homecard img={image2} title="Random Beer " 
        description={description}/>
        </Link>

        <Link to="/beers/new-beer">
        <Homecard img={image3} title="New Beer " description={description}/>
        </Link>
    </div>
  );
};

export default Home;
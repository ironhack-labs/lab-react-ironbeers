import React, {useState, useEffect} from 'react';
import Header from './../components/Header';
import BeerDetail from './../components/BeerDetail';
import {getBeer} from './../services/beerService';

const BeerPage = (props) => {
  const [beer, setBeer] = useState('');
  const {id} = props.match.params;

  useEffect(() => {
    getBeer(id).then(beer => setBeer(beer));
  }, []);

  return(
    <div>
      <Header/>
      <BeerDetail beer={beer}/>
    </div>  
  );
}

export default BeerPage;
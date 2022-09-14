import Loading from '../loading/Loading';
import ItemBeer from '../item-beer/ItemBeer';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import HomeBanner from '../../assets/header.png';

import './ListBeer.css'

function ListBeer() {

  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => setBeers(res.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="list-beer">
      <Link to={'/'}>
        <img className="list-beer__header" src={HomeBanner} alt="Home" />
      </Link>
      {
        beers ? 
        beers.map(beer => 
          <ItemBeer key={beer._id} {...beer}/>
        ) : 
        <Loading />
      }
    </div>
  )
}

export default ListBeer;
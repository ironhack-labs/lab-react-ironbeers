import Loading from '../loading/Loading';
import ItemBeer from '../item-beer/ItemBeer';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import HomeBanner from '../../assets/header.png';

import './ListBeer.css'

function ListBeer() {

  const [ beers, setBeers ] = useState(null);

  const getBeers = (value) => axios.get(`https://ih-beers-api2.herokuapp.com/beers${value?.length ? `/search?q=${value}` : ''}`)
    .then(res => setBeers(res.data))
    .catch(error => console.error(error));

  useEffect(() => {
    getBeers()
  }, [])

  const handleChange = event => {
    const { value } = event.target;
    getBeers(value);
  }

  return (
    <div className="list-beer">
      <Link to={'/'}>
        <img className="list-beer__header" src={HomeBanner} alt="Home" />
      </Link>
      <div class="input-group mb-3 d-flex mt-2 list-beer__search">
        <span class="input-group-text"><i class="fa fa-search fa-fw"></i></span>
        <input type="text" class="form-control" onChange={handleChange} />
      </div>
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
import React from 'react';
import BeerList from '../../components/BeerList/BeerList';
import { Link } from 'react-router-dom';

const BeerListScreen = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className=''>Beer List</h1>
        <Link to="/">Back to Home</Link>
      </div>
      <BeerList />
    </div>
  );
}

export default BeerListScreen;

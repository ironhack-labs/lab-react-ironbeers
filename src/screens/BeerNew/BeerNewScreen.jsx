import React from 'react';
import { Link } from 'react-router-dom';
import BeerNewForm from '../../components/BeerNew/BeerNewForm';

const BeerNewScreen = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className='my-5'>New Screen</h1>
        <Link to="/">Back to Home</Link>
      </div>
      <BeerNewForm />
    </div>
  );
}

export default BeerNewScreen;

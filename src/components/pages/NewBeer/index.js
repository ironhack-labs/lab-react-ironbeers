import React from 'react';
import Header from '../../organisms/Header';

import APIService from '../../../services/api.services';

const NewBeer = () => {
  return (
    <div>
      <Header />
      <h1>Form to add a new beer!</h1>
    </div>
  );
};

export default NewBeer;

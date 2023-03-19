import React from 'react';
import './index.css'

const HomeCard = ({ img, children }) => {
  return (
    <div className='HomeCard mb-4'>
      <img src={img} alt='beers' className='mb-2'/>
      <div className='ms-3 me-3'>
        {children}
      </div>
    </div>
  );
};

export default HomeCard;
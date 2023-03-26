import React from 'react';

const Beer = ({name, image_url, tagline, contributed_by}) => {
    return (
        <div>
        <div className='Beer w-100 m-3'>
      <img alt='beer' src={image_url} style={{height: '200px'}} className='mb-4'/>
        <div className='d-flex flex-column justify-content-center'>
          <h3>{name}</h3>
          <p>{tagline}</p>
        <p className='text-secondary'><b>{contributed_by}</b></p>
        </div>
    </div>
        </div>
    );
};

export default Beer;
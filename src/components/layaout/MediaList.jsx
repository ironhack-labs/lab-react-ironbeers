import React from 'react';

const MediaList = ({ beer }) => {
  return (
    <li
      className="media py-2 my-2"
      style={{ borderBottom: '1px solid #dfdcdc' }}
    >
      <img
        src={beer.image_url}
        className="mr-3 align-self-center"
        style={{ maxHeight: '90px', maxWidth: '40px' }}
        alt={beer.name}
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{beer.name}</h5>
        {beer.tagline}
        <br />
        {beer.contributed_by}
      </div>
    </li>
  );
};

export default MediaList;

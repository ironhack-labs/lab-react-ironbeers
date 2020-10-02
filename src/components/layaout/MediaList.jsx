import React from 'react';

const MediaList = ({ beer }) => {
  return (
    <li
      className="media py-3 px-2"
      style={{ borderBottom: '1px solid #dfdcdc' }}
    >
      <img
        src={beer.image_url}
        className="ml-3 mr-4 align-self-center"
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

import React from 'react';

export default function Beer({
  image_url,
  name,
  tagline,
  description,
  attenuation_level,
  first_brewed,
  contributed_by,
}) {
  console.log(name);
  return (
    <>
      <div className='__card-R'>
        <img src={image_url} />
        <h1>{name}</h1>
      </div>
    </>
  );
}

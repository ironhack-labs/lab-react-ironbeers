import React from 'react';
import NavBar from '../NavBar/Navbar';

export default function SingleBeer(props) {
  console.log('random beer recebida!', props.singleBeer);
  const {
    name,
    tagline,
    first_brewed,
    description,
    attenuation_level,
    contributed_by,
  } = props.singleBeer;

  return (
    <div>
      <NavBar />
      <p>{name}</p>
      <p>{attenuation_level}</p>
      <p>{first_brewed}</p>
      <p>{description}</p>
      <p>{contributed_by}</p>
      <p>{tagline}</p>
    </div>
  );
}

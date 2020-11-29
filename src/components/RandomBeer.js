import React, { useState, useEffect } from 'react';
import { getRandomBeer } from '../services/beers';
import { Typography, Skeleton, Divider, Button } from 'antd';

const { Title } = Typography;

export default function BeerDetails({history}) {
  const [randomBeer, setRandomBeer] = useState(null);
  

 useEffect(() => {
   async function getARandomBeer() {
     const { data} = await getRandomBeer();
     setRandomBeer(data);
     
   }
   getARandomBeer();
   
 }, []);


  async function handleGoBack() {
    history.push('/beers');
  }

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Title level={1}>Random beer u got..</Title>
      {randomBeer ? (
        <div>
          <Title level={2}>{randomBeer.name}</Title>
          <img style={{ width: '40px' }} src={randomBeer.image_url} alt="" />
          <br />
          <br />
          <p>
            {' '}
            <b>Tagline:</b> {randomBeer.tagline}
          </p>
          <p>
            {' '}
            <b>First brewed:</b> {randomBeer.first_brewed}
          </p>
          <p>
            {' '}
            <b>Attenuation level:</b> {randomBeer.attenuation_level}
          </p>
          <p>
            {' '}
            <b>Description:</b> {randomBeer.description}
          </p>
          <p>
            {' '}
            <b>Contributed by: </b> {randomBeer.contributed_by}
          </p>
          <Divider></Divider>
          <Button type="ghost" onClick={handleGoBack} block primary>
            All beers
          </Button>
        </div>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
}

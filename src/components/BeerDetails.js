import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSingleBeer } from '../services/beers';
import { Typography, Skeleton, Divider, Card, Button } from 'antd';

const { Title } = Typography;

export default function BeerDetails({
  match: {
    params: { id },
  },
  history,
}) {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    console.log('mount');
    async function getBeerDetail() {
      const { data } = await getSingleBeer(id);
      setBeer(data);
    }
    getBeerDetail();
  }, []);

  async function handleGoBack() {
    history.push('/beers')
  }

  console.log('the beer: ', beer);
  return (
    <div style={{ padding: '1rem 3rem' }}>
      {beer ? (
        <div>
          <Title level={2}>{beer.name}</Title>
          <img style={{ width: '40px' }} src={beer.image_url} alt="" />
          <br />
          <br />
          <p>
            {' '}
            <b>Tagline:</b> {beer.tagline}
          </p>
          <p>
            {' '}
            <b>First brewed:</b> {beer.first_brewed}
          </p>
          <p>
            {' '}
            <b>Attenuation level:</b> {beer.attenuation_level}
          </p>
          <p>
            {' '}
            <b>Description:</b> {beer.description}
          </p>
          <p>
            {' '}
            <b>Contributed by: </b> {beer.contributed_by}
          </p>
          <Divider></Divider>
          <Button type="ghost" onClick={handleGoBack} block primary>
          Back 
          </Button>
        </div>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
}

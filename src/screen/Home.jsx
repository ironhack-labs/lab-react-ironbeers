import React from 'react';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="container text-center mt-5 mb-5">
      <Card link='/beers' url='/images/Beers.jpg' title='All Beers' />
      <Card link='/random-beer' url='/images/RandomBeer.jpg' title='Random Beer' />
      <Card link='/new-beer' url='/images/NewBeer.jpg' title='New Beer' />
    </div>
  );
}

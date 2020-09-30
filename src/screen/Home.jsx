import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import ListBeer from './screen/ListBeer'
// import RandomBeer from './screen/RandomBeer'
// import NewBeer from './screen/NewBeer'
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="container text-center mt-5 mb-5">
      <Card link='/beers' url='/images/Beers.jpg' title='All Beers' />
      <Card link='/random-beer' url='/images/RandomBeer.jpg' title='All Beers' />
      <Card link='/new-beer' url='/images/NewBeer.jpg' title='All Beers' />
    </div>
  );
}

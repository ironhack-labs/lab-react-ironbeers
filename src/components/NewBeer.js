import { Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header/Header';
const NewBeers = () => {
  const [beerName, setBeerName] = useState('');
  const [beerTag, setBeerTag] = useState('');
  const [beerDes, setBeerDes] = useState('');
  const [beerBrew, setBeerBrew] = useState('');
  const [beerTips, setBeerTips] = useState('');
  const [beerAten, setBeerAten] = useState(0);
  const [beerContri, setBeerContri] = useState('');

  const addNewBeer = () => {
    const beer ={
      name: beerName,
      tagline: beerTag,
      description:beerDes,
      first_brewed:beerBrew,
      brewers_tips:beerTips,
      attenuation_level:beerAten,
      contributed_by:beerContri
    };
    createApiBeer(beer);
  };

  function createApiBeer(beer) {
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, beer)
      .then((response) => {
        console.log('Info cfreate beer', response.data);
      });
  }

  return (
    <div>
      <Header />
      <div>
        <p>Name: </p>
        <Input
          type="text"
          onChange={(event) => setBeerName(event.target.value)}
        />
        <p>Tagline: </p>
        <Input
          type="text"
          onChange={(event) => setBeerTag(event.target.value)}
        />
        <p>Description: </p>
        <Input
          type="text"
          onChange={(event) => setBeerDes(event.target.value)}
        />
        <p>First Brewed : </p>
        <Input
          type="text"
          onChange={(event) => setBeerBrew(event.target.value)}
        />
        <p>Brewers Tips : </p>
        <Input
          type="text"
          onChange={(event) => setBeerTips(event.target.value)}
        />
        <p>Attenuation Level : </p>
        <Input
          type="number"
          onChange={(event) => setBeerAten(event.target.value)}
        />
        <p>Contributed By : </p>
        <Input
          type="text"
          onChange={(event) => setBeerContri(event.target.value)}
        />

        <button onClick={() => addNewBeer()}>Create</button>
      </div>
    </div>
  );
};

export default NewBeers;

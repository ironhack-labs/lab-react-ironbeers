import { useEffect } from 'react';
import React from 'react';
import Navbar from '../Navbar';
import DetailBeer from '../UI/DetailBeer';

const RandomBeer = (props) => {
  useEffect(() => {
    console.log('component did mount!, ', props.beerData, singleRandomBeer);
  }, [props.beerData]);

  const singleRandomBeer =
    props.beerData[Math.floor(Math.random() * props.beerData.length)];

  if (singleRandomBeer === undefined) {
    return (
      <div>
        <Navbar />
        <div className="flexwrapper">
          <div className="lds-roller asd">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return <DetailBeer backlink="" beerObj={singleRandomBeer} />;
};

export default RandomBeer;

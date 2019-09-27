import React from 'react';
import IronCard from '../Card';


export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <IronCard imgTitle={'All beers'} cardLink={'/beers'} imgCard={'/images/beers.png'} altCard={'Todas las beers'} txtCard={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
              <IronCard imgTitle={'New beer'} cardLink={'/newbeer'} imgCard={'/images/new-beer.png'} altCard={'New beer'} txtCard={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
              <IronCard imgTitle={'Random beer'} cardLink={'/randombeer'} imgCard={'/images/random-beer.png'} altCard={'Random beer'} txtCard={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
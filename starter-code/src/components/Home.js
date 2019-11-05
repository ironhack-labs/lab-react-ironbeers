import React from 'react';
import CardHome from './CardHome'

const Home = () => {
  return (
    <div className="home-container">
      <CardHome img='../images/beers.png' title='All beers' link='/beers'  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" />
      <CardHome img='../images/new-beer.png' title='Random Beer' link='/random-beer' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" />
      <CardHome img='../images/random-beer.png' title='New Beer' link='/new-beer' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" />
    </div>
  )
}

export default Home;

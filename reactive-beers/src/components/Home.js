import React from "react";
import { infoCardsMenu } from '../constants';
import CardMenu from './CardMenu';

const Home = () => {
  
  const listCards = () => infoCardsMenu.map((card, i) => <CardMenu key={i} {...card } />)

  return (
    <div className="container">
      { listCards() } 
    </div>
  )
  
}

export default Home;
import React from 'react'
import './HomePage.css';
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png';
import randomBeer from '../../assets/random-beer.png';



import CardContainer from '../../components/Navbar/CardContainer/CardContainer';

const HomePage = () => {
  return (
    <div> 

    <CardContainer style={{marginTop: '2vh'}} link={'beers'} beers={beers} name = {'All Beers'} />     
    <CardContainer className = 'new-beer' link={'random-beer'} beers={randomBeer} name = {'Random Beer'} />
    <CardContainer className = 'new-beer' link={'new-beer'} beers={newBeer} name = {'New Beer'} />
   
    </div>
  )
}

export default HomePage
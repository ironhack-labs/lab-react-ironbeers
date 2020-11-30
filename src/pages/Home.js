import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'


export default function Home(){
  return (
    <div style={{margin: '0'}}className='home'>
      <Link to={`/beers`}>
        <div style={{height: '150px', overflow:'hidden', position:'relative'}}>
          <img style={{width:'100%', position:'absolute'}}src="https://cdn2.hubspot.net/hubfs/659515/craft_beer_taps.jpg" alt=""/>
        </div>
        <div style={{padding: '20px'}}>
          <h2>All Beers</h2> 
          <p>Cras felis mauris, blandit vitae ultrices sed, lobortis eu magna. Proin mattis sagittis ex. Vivamus consectetur hendrerit mattis. Aliquam fermentum.</p>
        </div>
      </Link>
      <Link to={`/random`}>
        <div style={{height: '150px',overflow:'hidden', position:'relative'}}>
          <img style={{width:'100%', position:'absolute'}}src="https://europe-journey.com/wp-content/uploads/2019/03/beer-1513436_1280.jpg" alt=""/>
        </div>
        <div style={{padding: '20px'}}>
          <h2>Random Beer</h2> 
          <p>Cras felis mauris, blandit vitae ultrices sed, lobortis eu magna. Proin mattis sagittis ex. Vivamus consectetur hendrerit mattis. Aliquam fermentum.</p>
        </div>
      </Link>
      <Link to={`/new`}>
        <div style={{height: '150px',overflow:'hidden', position:'relative'}}>
          <img style={{width:'100%', position:'absolute'}} src="https://cdn2.justwineapp.com/assets/article/2017/05/Beer-Flight-2-1200x630.jpg" alt=""/>
        </div>
        <div style={{padding: '20px'}}>
          <h2>New Beer</h2>
          <p>Cras felis mauris, blandit vitae ultrices sed, lobortis eu magna. Proin mattis sagittis ex. Vivamus consectetur hendrerit mattis. Aliquam fermentum.</p>     
        </div>
      </Link>
    </div>
  )
}
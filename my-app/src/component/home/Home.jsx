import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import Beers from '../beers/Beers'
import RandomBeers from '../random-beers/RandomBeers'
import NewBeers from '../new-beers/NewBeers'
import beers from '../../img/beers.png'
import randomBeer from '../../img/random-beer.png'
import newBeer from '../../img/new-beer.png'

class Home extends Component {
  // constructor() {
  //   super();
  // } 

  render() {
    return (
      <div>
        <div>
          <Link to='/beers' component={Beers} >
            <img src={beers} alt='beers'/>
          </Link>
          <h1>All Beers</h1>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.</p>
        </div>
        <div>
          <Link to='/beers/random' component={RandomBeers}>
            <img src={randomBeer} alt='random-beer'/>
          </Link>
          <h1>Random Beers</h1>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.</p>
        </div>
        <div>
          <Link to='/new-beers' component={NewBeers} >
          <img src={newBeer} alt='new-beers'/>
          </Link>
          <h1>New Beers</h1>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.</p>
        </div>
      </div>
    )
  }
}

export default Home;
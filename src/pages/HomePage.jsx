import {Link} from 'react-router-dom';
import beersPic from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';


function HomePage() {
 
  return (

    <div className='cards-div'>
    <h2>IronBeers</h2>

  <section className='card'>  
  <Link className='links' to='/beers'>
  <img  className='images' src={beersPic} alt="beer"/>
   <h6>All Beers</h6> 
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </Link> 
  </section>

  <section className='card'>  
  <Link className='links' to='/random'>
  <img  className='images' src={randomBeer} alt="beer"/>
   <h6>Random Beer</h6> 
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </Link> 
  </section>

  <section className='card'>  
  <Link className='links' to='/new-beer'>
  <img  className='images' src={newBeer} alt="beer"/>
   <h6>Add a Beer</h6> 
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </Link> 
  </section>



  </div>

  )
}

export default HomePage;
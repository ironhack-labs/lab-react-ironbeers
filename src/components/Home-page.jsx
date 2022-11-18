import React from 'react'
import image1 from '../../src/assets/beers.png';
import image2 from '../../src/assets/new-beer.png';
import image3 from '../../src/assets/random-beer.png';
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <div>
       <p>Home Page</p>
        
        <p><img src={image1} alt="image1"/></p>
        <Link to='/Beers'>Go to All Beers</Link> 
        

        <p><img src={image3} alt="image3"/></p>
        <Link to='/Random-beer'>Go to Random Beer</Link>
        
        <p><img src={image2} alt="image2"/></p>
        <Link to='/New-beer'>Go to New Beer</Link>
        
    </div>
  )
}

export default Homepage







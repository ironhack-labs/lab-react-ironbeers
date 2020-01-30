import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
     
      <div className="App">
         
            <img src="../images/beers.png" alt="picture 1"/><br></br>
            <Link to='/beers'>All Beers</Link>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...</p>
            <br></br>
            
            <img src="../images/random-beer.png" alt="picture 2"/><br></br>
            <Link to='/random-beer'>Random Beers</Link>
            <p>Lorem ipsum...</p>
            <br></br>
        
            <img src="../images/new-beer.png" alt="picture 3"/><br></br>
            <Link to='/new-beer'>New Beer</Link>
            <p>Lorem ipsum...</p>
            <br></br>
        
        </div>
      </div>
   
  )
}

export default home;
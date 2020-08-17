import React from 'react';
import { Link} from 'react-router-dom';




function Home() {
  return (
    <div className="home"> 
      <Link to="/beers" >
       
          <img  src="https://i0.wp.com/irelandstolemyheart.com/wp-content/uploads/2018/08/bar-209148_1280.jpg?resize=1200%2C580&ssl=1" alt="barra-bar"/>
          <h1>All Beers</h1>
          <p>Ireland is known for its pubs and chances are that you will be spending quite a bit of your time in those pubs during your Irish vacation.</p>
      
      </Link>

      <Link to="/random-beer">
       
        <img  src="https://i0.wp.com/irelandstolemyheart.com/wp-content/uploads/2018/08/nikola-jovanovic-198375-unsplash.jpg?w=2320&ssl=1" alt=""/>
        <h1>Random Beer</h1>
        <p>Ireland is known for its pubs and chances are that you will be spending quite a bit of your time in those pubs during your Irish vacation. </p>
              
      </Link>
      
      <Link to="/new-beer">
        
        <img src="https://i1.wp.com/irelandstolemyheart.com/wp-content/uploads/2018/05/beer-2822927_1280.jpg?w=1280&ssl=1" alt=""/>
        <h1>New Beers</h1>
        <p>Ireland is known for its pubs and chances are that you will be spending quite a bit of your time in those pubs during your Irish vacation. </p>
      
      </Link>
  
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div>
      <Link
         key="beers"
         to="/beers"
      >
        <h2>All Beers</h2>
      </Link>
          <p>beer is one of the most consumed drinks between Ironhackers , our mission here is to create an app to showcase some of the best-handcrafted beers, but not just that - to save some as well so the rest of Ironhack community is informed </p> 
      <Link
         key="random"
         to="/beers/random"
      >
        <h2>Random Beers</h2>
      </Link>
          <p>beer is one of the most consumed drinks between Ironhackers , our mission here is to create an app to showcase some of the best-handcrafted beers, but not just that - to save some as well so the rest of Ironhack community is informed </p> 
      <Link
         key="new-beer"
         to="/new-beer"
      >
      <h2>Add New Beers</h2>
      </Link>
          <p>beer is one of the most consumed drinks between Ironhackers , our mission here is to create an app to showcase some of the best-handcrafted beers, but not just that - to save some as well so the rest of Ironhack community is informed </p> 
    </div>
  );
}

export default Home;

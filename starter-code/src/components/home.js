import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <>
      <div style={{ paddingLeft: 280 }}>
        <img width="800" height="300" src="./images/beers.png" alt="All beers" />
        <Link to="beers" style={{ textDecoration: 'none' }}>
          <div >All Beers</div>
        </Link>
        <p>Here at Ironbeers we have a selection of the finest brewed beers of all time. Since 1971 we have accomplished
        <br />brewing over 2000 different beers. From lager, to pale ale and indian pale ale. Click to see the complete list of
        <br />   our beers that make us famous in the whole world.
        </p>
      </div>

      <div style={{ paddingLeft: 280 }}>
        <img width="800" height="300" src="./images/random-beer.png" alt="Random Beer" />
        <Link to="random-beer" style={{ textDecoration: 'none' }}>
          <div >Random Beer</div>
        </Link>
        <p>
          In this section you will have access to a random beer from our inventory. Don´t be shy as you may find
          <br />refreshing and new flavours that you never imagined before.
        </p>
      </div>

      <div style={{ paddingLeft: 280 }}>
        <img width="800" height="300" src="./images/new-beer.png" alt="New Beer" />
        <Link to="new-beer" style={{ textDecoration: 'none' }}>

          <div >New Beer</div>
        </Link>
        <p>
          In this section you will be able to customize and designd a new beer from scratch. The list of items we will need
          <br />are as follow: name, tagline, description, first brewed, brewers tips, attenuation level and contributed by.
          Hope you enjoy!
        </p>
      </div>
    </>


  )


}

export default Home;
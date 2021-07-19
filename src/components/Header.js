import React, { useState, useEffect } from 'react';
import headerImg from '../../public/header.png';
import { Link } from 'react-router-dom';

function Header() {
  //HeaderCode für alle Components wiederholen?
  return (
    <nav>
      <Link to="/">
        <img src="{headerImg}"></img>
      </Link>
    </nav>
  );
}

export default Header;

//2. On every component (except for the home), we should add a header with a link to the root of the app.

//3. on beers route, show list of all beers from database. array of beers = array of objects. console lofg it!!!
//display img, name etc & add link to check details of each beer
// The link should navigate to /beers/:beerId.

//4. display single beer (beerdetail). console.log response from API

//5. On the /random-beer route, show random beer from db.
// The endpoint will do all the job for us, all we need to do is to call https://ih-beers-api2.herokuapp.com/beers/random. We should receive an object including all the info about a beer.
//The same way we did with the Single Beer view, we should render the following fields...

//create a new beer with form. /new-beer route (remember, this is you react route, you're displaying the form on this route)

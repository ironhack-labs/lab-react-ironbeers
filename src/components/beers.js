// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
/* import axios from 'axios'; */

function Beers(props) {
  /*   const [state, setState] = useState({
    image:
    name:
    tagline:
    contributed_by:
    
});

  useEffect(() => {
    async function fecthData() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response);
    }
    fetchData();
  }, []); */

  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}

export default Beers;

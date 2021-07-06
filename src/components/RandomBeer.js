import React from 'react';
import Header from './Header';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function RandomBeer(props) {
  // let [randomBeer, setRandomBeer] = useState([]);
  // console.log(props);

  // useEffect(() => {
  //   axios
  //     .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
  //     .then((res) => {
  //       setRandomBeer(res.data);
  //       console.log(res.data);
  //     });
  // }, []);

  // const showRandomBeer = () => {
  //   return (
  //     <div>
  //       <img
  //         src={randomBeer.image_url}
  //         style={{ height: '30vh', paddingTop: '3em' }}
  //         alt="random"
  //       />
  //       <div>
  //         <div className="beerName">
  //           <div style={{ fontSize: '30px', textAlign: 'left' }}>
  //             {randomBeer.name}
  //           </div>
  //           <div style={{ fontSize: '25px', color: 'gray' }}>
  //             {randomBeer.attenuation_level}
  //           </div>
  //         </div>
  //         <div className="beerName">
  //           <div style={{ color: 'gray' }}>{randomBeer.tagline}</div>
  //           <div style={{ fontWeight: 'bolder' }}>
  //             {randomBeer.first_brewed}
  //           </div>
  //         </div>
  //         <div>{randomBeer.description}</div>
  //         <div style={{ padding: '10px 0', textAlign: 'left', color: 'gray' }}>
  //           {randomBeer.contributed_by}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  // FOR SOME REASON IT WORKS WITHOUT THIS! OH WELL.

  return (
    <div>
      <Header />
      {/* <h1>RANDOM BEER IS WORKING</h1> */}
      {/* <RandomBeer/> */}
    </div>
  );
}

export default RandomBeer;

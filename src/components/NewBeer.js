import React from 'react';
import newBeer from '../assets/new-beer.png';
import Header from "./Header/Header";
const NewBeers = () => {
  return (
    <div>
     <Header/>
      <h2>NewBeers component</h2>
      <img src={newBeer} alt=" new beer" />
      <p>
        Aenean elit urna, auctor eu dignissim in, varius eget velit. Etiam et
        malesuada ex. Nulla ipsum orci, ullamcorper et aliquet nec, commodo ac
        eros. Morbi posuere nec est id rutrum. Suspendisse imperdiet turpis
        posuere massa rhoncus, eget aliquam diam cursus. Ut non nulla in felis
        accumsan feugiat et id ante. In a nisl placerat quam dictum iaculis.
      </p>
    </div>
  );
};

export default NewBeers;
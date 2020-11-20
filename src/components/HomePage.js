import React from 'react';
import { Link } from 'react-router-dom';

import AllBeers from '../images/AllBeers.jpg';
import CreateBeer from '../images/CreateBeer.jpg';
import RamdomBeer from '../images/RamdomBeer.jpg';

function HomePage() {
  return (
    <>
      <Link to="/AllBeers" className="Sect">
        <img src={AllBeers} className="ImgContainer"></img>
        <div className="TextH">
          <strong>All Beers</strong> is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </Link>

      <Link to="/ramdon" className="Sect">
        <img src={RamdomBeer} className="ImgContainer"></img>
        <div className="TextH">
        <strong>Ramdon Beer</strong> is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </Link>

      <Link to="/form" className="Sect">
        <img src={CreateBeer} className="ImgContainer"></img>
        <div className="TextH">
        <strong>Create Beer</strong> is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </Link>
    </>
  );
}

export default HomePage;

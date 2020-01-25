import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-beers">
        <Link to="/beers" className="home-links">
          <img src="/images/beers.png" alt="beers"/>
          <h2 className="home-links">All Beers</h2>
          <p className="home-links">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt quia earum modi cum ipsam temporibus doloremque, ab voluptatum minus, vitae perspiciatis culpa. Excepturi itaque reiciendis consectetur ullam aperiam eos?</p>
        </Link>
      </div>
      <div className="home-random">
        <Link to="/random-beer" className="home-links">
          <img src="/images/random-beer.png" alt="beers"/>
          <h2 className="home-links">Random Beer</h2>
          <p className="home-links">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos nostrum beatae libero odio mollitia corporis delectus iure voluptate cupiditate, ullam, aliquam voluptates, sequi temporibus! Illo iure accusantium corporis provident?</p>
        </Link>
      </div>
      <div className="home-newbeer">
        <Link to="/new-beer" className="home-links">
          <img src="/images/new-beer.png" alt="beers"/>
          <h2 className="home-links">New Beer</h2>
          <p className="home-links">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rerum corrupti ipsum reiciendis debitis veniam at exercitationem ducimus provident assumenda! Illo perspiciatis nesciunt impedit sed illum nobis quibusdam quasi aperiam.</p>
        </Link>
      </div>
    </div>
  )
}

export default Home;
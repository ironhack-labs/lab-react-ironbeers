import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <main className="Home">
        <div className="beers">
          <div>
            <img
              src="https://lh3.googleusercontent.com/proxy/Rb5zNLIsnkSngGGUL9zha0PXA0Ouo81F-UBB-uL0tnj3QXCgRgV2YX2Cm9-dlXQZrt2BrhNk6xXw9MOfRRNcnOeeTZRlJQvqAqP87BD88D2SHr9YeM7vBvnelEVkqRns7b2R0qXK5zDA9_2A1f6P-KbGIPaQgsIY5_B5xjYIYStwNmHp"
              alt="beers"
            />
          </div>
          <Link to="/beers">All Beers</Link>
        </div>
        <div className="beers">
          <div>
            <img
              src="https://www.masons-arms-battersea.co.uk/-/media/sites/microsites/m/the-masons-arms-_-p127/images/2019/carousel/fullers_masons_arms_car09.ashx?w=1024"
              alt="beers"
            />
          </div>
          <Link to="/random-beer">Random Beer</Link>
        </div>
        <div className="beers">
          <div>
            <img
              src="https://lh3.googleusercontent.com/proxy/cLexsDB6pN4-t1dA1mcDg96V3sqop7BkXWJrM_WiCyNMavdOmTEVqvGzjUc9Bw2iPeFjEQEhbj0XKYcf60iRncr_p2GE7nofhLxVypdpMg"
              alt="beers"
            />
          </div>
          <Link to="/new-beer">New Beer</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;

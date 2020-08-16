import React from 'react';
import { Link } from 'react-router-dom';

const HomeList = () => {
  return (
    <div className="homestyle">
      <ul>
        <div className="BeersItem">
          <img src="/public/images/beers1.jpg" />
          <a href="/beers" style={{ textDecoration: 'none' }}>
            Beers
          </a>
          <p>
       Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. 
       Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id.</p>
        </div>
        <div className="beersItem">
          <img src="/public/images/beers2.jpg" />
          <a href="random-beers" style={{ textDecoration: 'none' }}>
            Random beers
          </a>
          <p>
       Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. 
       Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id.</p>
        </div>
        <div className="BeersItem">
          <img src="/public/images/beers4.jpg" />
          <a href="new-beer" style={{ textDecoration: 'none' }}>
            New beer
          </a>
          <p>
       Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. 
       Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id.</p>
        </div>
      </ul>
    </div>
  );
};

export default HomeList;

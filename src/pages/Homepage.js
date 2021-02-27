import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
  return (
    <div className="container">
      <div className="all-beers">
        <img src="https://i.postimg.cc/xNvfj8Db/beers.png" alt="beers" />
        <h2 className="title">
          <Link to="/beers">All Beers</Link>
        </h2>
        <div className="main-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            pretium nisi, a sagittis nulla. Integer varius elit eget viverra
            condimentum. Nam nunc eros, tincidunt ut venenatis non, imperdiet
            vitae dolor. Cras semper, sapien ut bibendum suscipit, dolor ipsum
            tincidunt nulla, vel hendrerit eros ante et massa. Aliquam molestie
            non arcu et placerat.
          </p>
        </div>
      </div>
      <div className="random-beer">
        <img src="https://i.postimg.cc/LnV9rJ3c/random-beer.png" alt="beers" />
        <h2>
          <Link to="/random-beer">Random Beer</Link>
        </h2>
        <div className="main-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            pretium nisi, a sagittis nulla. Integer varius elit eget viverra
            condimentum. Nam nunc eros, tincidunt ut venenatis non, imperdiet
            vitae dolor. Cras semper, sapien ut bibendum suscipit, dolor ipsum
            tincidunt nulla, vel hendrerit eros ante et massa. Aliquam molestie
            non arcu et placerat.
          </p>
        </div>
      </div>
      <div className="new-beer">
        <img src="https://i.postimg.cc/zVNDtCKw/new-beer.png" alt="new-beer" />
        <h2 className="text-left">
          <Link to="/add-beer">New Beer</Link>
        </h2>
        <div className="main-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            pretium nisi, a sagittis nulla. Integer varius elit eget viverra
            condimentum. Nam nunc eros, tincidunt ut venenatis non, imperdiet
            vitae dolor. Cras semper, sapien ut bibendum suscipit, dolor ipsum
            tincidunt nulla, vel hendrerit eros ante et massa. Aliquam molestie
            non arcu et placerat.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Homepage;

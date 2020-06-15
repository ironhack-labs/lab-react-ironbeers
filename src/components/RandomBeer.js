import React from 'react';

function RandomBeer() {
  return (
    <div>
      <header>
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + '/images/homeIcon.png'}
            alt="home"
            width="5%"
          />
        </a>
      </header>
    </div>
  );
}
export default RandomBeer;

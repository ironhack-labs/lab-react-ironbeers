import React from 'react';

function Home() {
  return (
    <section className="home">
      <div>
        <a href="/beers">
          <h1>🍺</h1>
          <h2>All Beers</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
        </a>
      </div>
      <div>
        <a href="/random">
          <h1>🙈</h1>
          <h2>Random Beer</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
        </a>
      </div>
      <div>
        <a href="/new-beer">
          <h1>📝</h1>
          <h2>New Beer</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
        </a>
      </div>
    </section>
  );
}

export default Home;

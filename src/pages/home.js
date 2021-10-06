import React from 'react';
import HomeCategories from '../components/Carrusel'

function Home() {

const handleClick = (e) => {
  console.log(hola)
}
 
  return (
    <section className="home">
    <h1>holaaaa</h1>
    <button type="button" onClick = {handleClick} id="assembly" className="categorie-container">
          <img id="assembly" src="./tool-icons/h-montaje.png" alt = "Assembly tools logo"/>
          <h3 id="assembly">
            Assembly
            <br />
            tools
          </h3>
        </button>
      <div>
        <a href="/beers">
          <h1></h1>
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

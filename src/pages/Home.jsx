import React from 'react'

export default function Home() {
  return (
    <div>
      <img class="home" src="../assets/beers.png" alt="Tresen"/>
      <div class="home-text">
        <h1><a class="home-link" href='/beers'>All Beers</a></h1>
        <p>“Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.” </p>
      </div>
      <img class="home" src="../assets/random-beer.png" alt="Zapfhahn"/>
      <div class="home-text">
        <h1><a class="home-link" href='/random'>Random Beer</a></h1>
        <p>“Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.” </p>
      </div>
      <img class="home" src="../assets/new-beer.png" alt="Bierglas"/>
      <div class="home-text">  
        <h1><a class="home-link" href='/new'>New Beer</a></h1>
        <p>“Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.” </p>
      </div>
    </div>
  )
}

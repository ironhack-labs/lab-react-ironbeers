import React from "react"

function Home () {
	return (
    <div>
      <img src={process.env.PUBLIC_URL + "/images/beers.png"} alt="beers" />
      <a href="/beers">All beers</a>
      <br />
      <img src={process.env.PUBLIC_URL + "/images/random-beer.png"} alt="Random beers" />
      <a href="/random-beers">Random beers</a>
      <br />
      <img src={process.env.PUBLIC_URL + "/images/new-beer.png"} alt="New beer" />
      <a href="/new-beer">New beer</a>
    </div>
  );
}
export default Home
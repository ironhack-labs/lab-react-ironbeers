import beers from "../assets/beers.png"
import random from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import { Link } from "react-router-dom";


function HomePage() {

  return (
    <>
      <Link to={"/beers"} >
        <img src={beers} alt="" />
        <h1>All Beers</h1>
        <p></p>
      </Link >
      <Link to={"/random-beer"}>
        <img src={random} alt="" />
        <h1>Random Beer</h1>
        <p></p>
      </Link >
      <Link to={"/new-beer"}>
        <img src={newBeer} alt="" />
        <h1>New Beer</h1>
        <p></p>
      </Link >
    </>  
  )

}

export default HomePage;

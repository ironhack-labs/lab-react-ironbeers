import beers from "../assets/beers.png"
import random from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import { Link } from "react-router-dom";


function HomePage() {

  return (
    <>
      <div className="d-flex flex-column align-items-center m-5 gap-5">
        <Link to={"/beers"} >
          <img src={beers} alt="" />
          <h3 className="mt-2">All Beers</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, .</p>
        </Link >
        <Link to={"/random-beer"}>
          <img src={random} alt="" />
          <h3 className="mt-2"> Random Beer</h3>
          <p>Lorem ipsum dolor, sit amet consectetur afugiat excepturi!</p>
        </Link >
        <Link to={"/new-beer"}>
          <img src={newBeer} alt="" />
          <h3 className="mt-2">New Beer</h3>
          <p>Lorem ipsum dolor sit ametofficia. Eligendi aut deleniti officia facilis?</p>
        </Link >
      </div>  
    </>  
  )

}

export default HomePage;

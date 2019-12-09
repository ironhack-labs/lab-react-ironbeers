import React from 'react';
import CardColumns from "react-bootstrap/CardColumns";
import HomeCard from "../components/HomeCard";

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam, sequi, doloribus provident nesciunt iste facilis.";

const Home = () => {
  return (
    <CardColumns>
      <HomeCard img={"./images/beers.png"} title="All Beers" body={lorem} url={"/beers"}/>
      <HomeCard img={"./images/random-beer.png"} title="Random Beer" body={lorem} url={"/random-beer"}/>
      <HomeCard img={"./images/new-beer.png"} title="New Beer" body={lorem} url={"/new-beer"}/>
    </CardColumns>
  )
}

export default Home

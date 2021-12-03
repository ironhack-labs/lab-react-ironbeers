import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import img01 from "../../assets/beers.png"
import img02 from "../../assets/random-beer.png"
import img03 from "../../assets/new-beer.png"

const Home = () => {
  return <Container className="homepage">
  

  <Link to="/allBeers">
  <img src={img01}  alt="beer"/>
  <h1>All Beers</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
  </Link>
  <Link to="/beers/random">
  <img src={img02}  alt="beer"/>
  <h1>Random Beers</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
  </Link>
  <Link to="/newBeer">
  <img src={img03}  alt="beer"/>
  <h1>New Beers</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
  </Link>
  </Container>
}

export default Home
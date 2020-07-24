import React from 'react';
import { Link } from "react-router-dom";
import bar from "../images/bar-209148_1920.jpg";
import random from "../images/beer-428121_1920.jpg";
import newbeer from "../images/beach-1869523_1920.jpg"


function Home() {
  return (
    <div className="home-div">
      <div className="home-beers">

           <Link to={"/all-beers"}>

           <img className="home-img" src={bar}/> 
            <h2 className="title">All Beers</h2>
            </Link>
        <p>
          Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum
          gentilitatem oppressi. praediximus enim Montium sub ipso vivendi
          termino his vocabulis appellatos fabricarum culpasse tribunos ut
          adminicula futurae molitioni pollicitos.
        </p>
      </div>
      <div className="home-beers">
      <Link to={"/random-beer"}>
      <img className="home-img" src={random}/> 
        <h2 className="title">Random Beer</h2>
        </Link>
        <p>
          Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum
          gentilitatem oppressi. praediximus enim Montium sub ipso vivendi
          termino his vocabulis appellatos fabricarum culpasse tribunos ut
          adminicula futurae molitioni pollicitos.
        </p>
      </div>
      <div className="home-beers">
      <Link to={"/new-beer"}>
      <img className="home-img" src={newbeer}/> 
        <h2 className="title">New Beer</h2>
        </Link>
        <p>
          Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum
          gentilitatem oppressi. praediximus enim Montium sub ipso vivendi
          termino his vocabulis appellatos fabricarum culpasse tribunos ut
          adminicula futurae molitioni pollicitos.
        </p>
      </div>
    </div>
  );
}

export default Home;

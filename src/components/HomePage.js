import React from "react";
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div className="container col-lg-8 mx-auto p-0">
          <a href="/beers">
            <img className="card-img-top" src={beers} alt="beers"/>
            <h2 className="px-3 mt-1 fw-light text-black" >All Beers</h2>
            
            <p className="px-3 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </a>
          <a href="/random-beer">
          <img className="card-img-top" src={randomBeer} alt="random beer"/>
          <h2 className="px-3 mt-1 fw-light text-black">Random Beer</h2>
          
          <p className="px-3 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          </a>
          <a href="/new-beer">
          <img className="card-img-top" src={newBeer} alt="new-beer"/>
          <h2 className="px-3 mt-1 fw-light text-black">New Beers</h2>
          
          <p className="px-3 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          </a>
      </div>
    </div>
  );
};

export default HomePage;

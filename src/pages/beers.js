import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import HomePage from "./HomePage";
import Home from "../assets/home.png";


const Beers = (props) => {
           return (
            <>
            <header>
            <Link to="/" element={<HomePage/>}>
                <img src={Home} />
            </Link>
            </header>
      <div>
            {props.beers.map((beer) => {
              return (
                <div key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} alt="" style={{width:70}}/>
                  <h3>{beer.name}</h3>
                  <h3>{beer.tagline}</h3>
                  <h3>Created by:{beer.contributed_by}</h3>
                        </Link>
                </div>
              );
            })}
          </div> 
          </>
        );
      };

export default Beers;
import React from 'react';
import BeersImage from '../assets/beers.png';
import NewBeerImage from "../assets/new-beer.png";
import randomImage from "../assets/random-beer.png"
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <div>
      <NavLink style={{ textDecoration: 'none', color:"black"}} to={`/beers`}><div>
          <div>
            <img style={{height:"150px"}} src={BeersImage} alt="Beers" />
          </div>
          <div style={{display:"flex", flexDirection:"column", textAlign:"left", paddingLeft:"20px"}}>
            <h2 style={{lineHeight:"0px", marginBottom:"0",marginTop:"10px" }}>All Beers</h2>
            <p style={{fontSize:"15px", color:"grey"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              corrupti error commodi dolor eum est ipsum nisi harum consequuntur
              doloribus, tenetur corporis accusamus perspiciatis! Ab nulla
              consectetur dicta at veritatis?
            </p>
          </div>
        </div></NavLink>
        <NavLink style={{ textDecoration: 'none', color:"black" }} to={`/random-beer`}><div>
        <div>
          <div>
            <img style={{height:"150px"}} src={randomImage} alt="Beers" />
          </div>
          <div style={{display:"flex", flexDirection:"column", textAlign:"left", paddingLeft:"20px"}}>
            <h2 style={{lineHeight:"0px", marginBottom:"0",marginTop:"10px" }}>Random Beer</h2>
            <p style={{fontSize:"15px", color:"grey"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              corrupti error commodi dolor eum est ipsum nisi harum consequuntur
              doloribus, tenetur corporis accusamus perspiciatis! Ab nulla
              consectetur dicta at veritatis?
            </p>
          </div>
        </div>
        </div></NavLink>
        <NavLink style={{ textDecoration: 'none', color:"black" }} to={`/new-beer`}><div>
        <div>
          <div>
            <img style={{height:"150px"}} src={NewBeerImage} alt="Beers" />
          </div>
          <div style={{display:"flex", flexDirection:"column", textAlign:"left", paddingLeft:"20px"}}>
            <h2 style={{lineHeight:"0px", marginBottom:"0",marginTop:"10px" }}>New Beer</h2>
            <p style={{fontSize:"15px", color:"grey"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              corrupti error commodi dolor eum est ipsum nisi harum consequuntur
              doloribus, tenetur corporis accusamus perspiciatis! Ab nulla
              consectetur dicta at veritatis?
            </p>
          </div>
        </div>
        </div></NavLink>
      </div>
    </div>
  );
};

export default Home;

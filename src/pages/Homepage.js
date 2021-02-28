import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"



class Homepage extends Component {
    render() {
        return (
            <div className= "homepage">
            <div className="allbeers-homepage">
           <img src={beers}/>
          <NavLink activeClassName="selected-link" exact to="/beers" >All Beers</NavLink>
          <p>Duis diam nisl, ullamcorper vitae sollicitudin non, pellentesque at augue. Vivamus quis tortor vitae dui feugiat lobortis. Proin lectus turpis, pretium a aliquet in, venenatis in odio. </p>
</div>
          <div className="randombeer-homepage">
          <img src={newBeer}/>
          <NavLink activeClassName="selected-link" exact to="/new-beer">New Beer</NavLink>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis risus vitae augue convallis malesuada nec eu sem. </p>
  </div>
  <div className="newbeer-homepage">

          <img src={randomBeer}/>
          <NavLink activeClassName="selected-link" exact to="/random-beer">Random Beer</NavLink>   
          <p>Nullam semper quam et enim interdum, vestibulum laoreet neque tincidunt. Suspendisse sed dapibus mauris. Donec varius arcu sed finibus consequat. Curabitur gravida sagittis turpis, nec aliquet sapien aliquet eu. </p>
            
            </div>
            </div>
        )
    }
}



export default Homepage;

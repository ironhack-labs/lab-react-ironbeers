import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

class HomePage extends Component {
  render(){
    return(
      <section className="HomePage">
        <div className="AllBeers">
          <div className="image">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/light-beers-for-national-beer-day-main-0-1518558278.jpg?crop=1xw:0.786xh;center,top&resize=980:*" alt="beers" />
          </div>
          <Link to="/all-beers"><h2>All Beers</h2></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="RandomBeer">
          <div className="image">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/light-beers-for-national-beer-day-main-0-1518558278.jpg?crop=1xw:0.786xh;center,top&resize=980:*" alt="beers" />
          </div>
          <Link to="/random-beer"><h2>Random Beer</h2></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="NewBeer">
          <div className="image">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/light-beers-for-national-beer-day-main-0-1518558278.jpg?crop=1xw:0.786xh;center,top&resize=980:*" alt="beers" />
          </div>
          <Link to="/add-beer"><h2>New Beer</h2></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    )
  }
}

export default HomePage;
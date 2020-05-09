import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header>
         <ul className="uk-navbar-nav">
          <li>
              <a href="#">
                  <span className="uk-icon uk-margin-small" uk-icon="icon: home"></span>
              </a>
          </li>
      </ul>
  </header> 
   );
  }
}
    
 export default Navbar;
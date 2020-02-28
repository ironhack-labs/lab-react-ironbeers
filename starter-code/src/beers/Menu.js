import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
 

  render() {
    return (

<div className="menu">
                <div className="container"><Link to="/beers">
                <img src="../images/beers.png" alt=""/>
                <h1>BEERS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam libero augue, venenatis et dui sit amet, auctor elementum massa. Aliquam placerat, enim a ornare maximus, sem mi mattis ipsum, at feugiat arcu urna vitae nisi. Vestibulum dapibus ante quis consectetur iaculis. Quisque laoreet orci interdum dui dignissim, et consectetur tellus mollis. Aliquam id justo a orci consequat dictum.</p>
                </Link></div>
                <div className="container"><Link to="/random-beer">
                <img src="../images/random-beer.png" alt=""/>
                <h1>RAMDOM BEER</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam libero augue, venenatis et dui sit amet, auctor elementum massa. Aliquam placerat, enim a ornare maximus, sem mi mattis ipsum, at feugiat arcu urna vitae nisi. Vestibulum dapibus ante quis consectetur iaculis. Quisque laoreet orci interdum dui dignissim, et consectetur tellus mollis. Aliquam id justo a orci consequat dictum.</p>
                </Link></div>
                <div className="container"><Link to="/new-beer">
                <img src="../images/new-beer.png" alt=""/>
                <h1>NEW BEER</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam libero augue, venenatis et dui sit amet, auctor elementum massa. Aliquam placerat, enim a ornare maximus, sem mi mattis ipsum, at feugiat arcu urna vitae nisi. Vestibulum dapibus ante quis consectetur iaculis. Quisque laoreet orci interdum dui dignissim, et consectetur tellus mollis. Aliquam id justo a orci consequat dictum.</p>
                </Link></div>
            </div>
    );
  }
}

export default Menu;
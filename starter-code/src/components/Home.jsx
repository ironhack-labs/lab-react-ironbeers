import React, { Component } from "react";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="All-Beers">
          <img src="./images/beers.png" alt="Beers" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            veritatis eius, sint modi aliquid accusamus minus molestiae
            accusantium laudantium ipsum facere minima dolores exercitationem
            temporibus fugiat aut voluptate, dicta qui.
          </p>
        </div>
        <div className="New-beer">
          <img src="./images/new-beer.png" alt="Beers" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            veritatis eius, sint modi aliquid accusamus minus molestiae
            accusantium laudantium ipsum facere minima dolores exercitationem
            temporibus fugiat aut voluptate, dicta qui.
          </p>
        </div>
        <div className="Random-beer">
          <img src="./images/random-beer.png" alt="Beers" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            veritatis eius, sint modi aliquid accusamus minus molestiae
            accusantium laudantium ipsum facere minima dolores exercitationem
            temporibus fugiat aut voluptate, dicta qui.
          </p>
        </div>
      </div>
    );
  }
}

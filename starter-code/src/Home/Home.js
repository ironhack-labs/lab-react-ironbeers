import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to={"/beers"}>
          <div className="beers-container">
            <img src="./images/beers.png" alt="" />
            <h2>All Beers</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              expedita aliquam consequuntur quam laborum vel numquam accusantium
              aperiam blanditiis in ratione, ad recusandae soluta porro earum
              provident, dolore cum facilis?
            </p>
          </div>
        </Link>
        <Link to={"/random-beer"}>
          <div className="random-beer-container">
            <img src="./images/random-beer.png" alt="" />
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              corporis fugit doloribus, praesentium iure, delectus dolorem
              voluptatibus ea enim magni rem ratione? At consequatur voluptate
              quos autem? Voluptas, dignissimos facere.
            </p>
          </div>
        </Link>
        <Link to={"/new-beer"}>
          <div className="new-beer-container">
            <img src="./images/new-beer.png" alt="" />
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              pariatur quod dolorum ea quam exercitationem libero, incidunt
              molestiae dolor. Sequi dolorum saepe, maiores dolorem laudantium
              consequuntur temporibus nam veritatis. Aliquid.
            </p>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

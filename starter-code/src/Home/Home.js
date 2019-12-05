import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to={"/beers"}>
          <div>
            <img src="./images/beers.png" alt="beers" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              repudiandae libero dolor obcaecati, ut corporis, esse optio quis,
              saepe dolorem quibusdam voluptatibus et consequatur pariatur
              aliquam illum nam autem quod.
            </p>
          </div>
        </Link>
        <Link to={"/random-beer"}>
          <div>
            <img src="./images/random-beer.png" alt="beers" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              repudiandae libero dolor obcaecati, ut corporis, esse optio quis,
              saepe dolorem quibusdam voluptatibus et consequatur pariatur
              aliquam illum nam autem quod.
            </p>
          </div>
        </Link>
        <Link to={"/new-beer"}>
          <div>
            <img src="./images/new-beer.png" alt="beers" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              repudiandae libero dolor obcaecati, ut corporis, esse optio quis,
              saepe dolorem quibusdam voluptatibus et consequatur pariatur
              aliquam illum nam autem quod.
            </p>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

 
import React, { Component } from "react";
import { Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/beers">
          <img src="/images/beers.png" alt="" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nostrum quas sequi eum libero saepe ullam similique maiores
            laudantium, debitis ea architecto, quae repudiandae nihil odio iure
            dolorem, dicta voluptas
          </p>
        </Link>
        <Link to="/random-beer">
          <img src="/images/random-beer.png" alt="" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nostrum quas sequi eum libero saepe ullam similique maiores
            laudantium, debitis ea architecto, quae repudiandae nihil odio iure
            dolorem, dicta voluptas
          </p>
        </Link>
        <Link to="/new-beer">
          <img src="/images/new-beer.png" alt="" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nostrum quas sequi eum libero saepe ullam similique maiores
            laudantium, debitis ea architecto, quae repudiandae nihil odio iure
            dolorem, dicta voluptas
          </p>
        </Link>
      </div>
    );
  }
}

export default Home;
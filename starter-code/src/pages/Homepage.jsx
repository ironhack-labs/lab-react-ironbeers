import React from "react";
import { Link } from "react-router-dom";
import "../styling/Homepage.css"


export class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link exact to="/beers" className="main-section-link">
            <section className="main-section">
              <img src="/images/beers.png" alt="Beers" />
              <h2>All Beers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet velit velit. Mauris porta dictum odio ac ornare.
                Pellentesque id purus vel purus ullamcorper laoreet non ut nisl.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </section>
          </Link>

          <Link exact to="/beers/random" className="main-section-link">
            <section className="main-section">
              <img src="/images/random-beer.png" alt="Beer" />
              <h2>Random Beer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet velit velit. Mauris porta dictum odio ac ornare.
                Pellentesque id purus vel purus ullamcorper laoreet non ut nisl.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </section>
          </Link>

          <Link exact to="/beers/new" className="main-section-link">
            <section className="main-section">
              <img src="/images/new-beer.png" alt="Beer" />
              <h2>New Beer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet velit velit. Mauris porta dictum odio ac ornare.
                Pellentesque id purus vel purus ullamcorper laoreet non ut nisl.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </section>
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;

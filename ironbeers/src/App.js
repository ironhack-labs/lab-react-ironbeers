import React, { Component } from "react";
import "./App.css";
import NavBar from "./common/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className="uk-section uk-section-secondary">
          <div className="uk-container ">
            <div>
              <img
                className="uk-width-1-1"
                src="img/beers.png"
                alt="all-beers"
              />
              <h2>All Beers</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                pariatur quod nesciunt fuga, minus consectetur sunt omnis, alias
                mollitia porro impedit. Mollitia ab commodi labore tempore
                dignissimos enim quisquam velit.
              </p>
            </div>
          </div>
        </section>
        <section className="uk-section uk-section-muted">
          <div className="uk-container">
            <img
              className="uk-width-1-1"
              src="img/random-beer.png"
              alt="all-beers"
            />
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              voluptates vel numquam id beatae qui, itaque non autem consectetur
              rerum temporibus libero, laborum error molestiae! Laborum sunt
              odit eligendi consequuntur.
            </p>
          </div>
        </section>
        <section className="uk-section uk-section-secondary">
          <div className="uk-container">
            <img
              className="uk-width-1-1"
              src="img/new-beer.png"
              alt="all-beers"
            />
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              beatae tenetur molestiae placeat debitis. Dolor porro aspernatur
              maiores sapiente ut suscipit doloremque? Quia ipsam repellendus
              aliquam iusto ad, corrupti fugiat.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

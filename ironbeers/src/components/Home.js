import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    //const { beers } = this.props;
    return (
      <div>
        <section className="uk-section uk-section-secondary">
          <div className="uk-container ">
            <Link to="/all-beers" className="uk-link-reset">
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
            </Link>
          </div>
        </section>
        <section className="uk-section uk-section-muted">
          <div className="uk-container">
            <Link to="/random-beer" className="uk-link-reset">
              <img
                className="uk-width-1-1"
                src="img/random-beer.png"
                alt="random-beer"
              />
              <h2>Random Beer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                voluptates vel numquam id beatae qui, itaque non autem
                consectetur rerum temporibus libero, laborum error molestiae!
                Laborum sunt odit eligendi consequuntur.
              </p>
            </Link>
          </div>
        </section>
        <section className="uk-section uk-section-secondary">
          <div className="uk-container">
            <Link to="/new-beer" className="uk-link-reset">
              <img
                className="uk-width-1-1"
                src="img/new-beer.png"
                alt="new-beer"
              />
              <h2>New Beer</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                beatae tenetur molestiae placeat debitis. Dolor porro aspernatur
                maiores sapiente ut suscipit doloremque? Quia ipsam repellendus
                aliquam iusto ad, corrupti fugiat.
              </p>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

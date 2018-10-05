import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styles from "./Section.css";
import List from "./List";
import Allbeers from "./Allbeers"

class Section extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "All Beers",
          link: "/all",
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/02/87/ba/09/14-draught-beer-taps.jpg",
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: "Random Beer",
          link: "/random",
          imageUrl:
            "http://brooklynbrewery.com/blog/wp-content/uploads/2013/01/Hospoda-quadrunner.jpg",
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: "New Beer",
          link: "/new",
          imageUrl:
            "http://www.thebeerspotandgrill.com/wp-content/uploads/2014/05/Beerslide3.jpg",
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    };
  }

  render() {
    const sections = this.state.sections;


    return (
        <div>
          {sections.map((e, i) => {
            console.log(e.link);
            return (
              <Link to={e.link}><div key={i} className="section">
                  <div className="photo">
                  <img src={e.imageUrl} component={Allbeers}/>
                  </div>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>

              </div></Link>
            );
          })}
          <div />
        </div>
    );
  }
}

export default Section;

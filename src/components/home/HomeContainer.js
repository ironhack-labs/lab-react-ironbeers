import React, { Component } from "react";
import Cards from "./Cards"

const directions = [
  {
    image:
      "https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/master/img/beers.png",
    title: "All Beers",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis quo culpa cupiditate repellendus nobis odit ratione illo molestias praesentium! Tempore rem non vero consequatur molestiae, eius accusantium maiores? Non?",url:"/allbeers"
  },

  {
    image:
      "https://github.com/ironhack-labs/lab-react-ironbeers/blob/master/img/new-beer.png?raw=true",
    title: "Random Beer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis quo culpa cupiditate repellendus nobis odit ratione illo molestias praesentium! Tempore rem non vero consequatur molestiae, eius accusantium maiores? Non?", url:"/random"
  },

  {
    image:
      "https://github.com/ironhack-labs/lab-react-ironbeers/blob/master/img/random-beer.png?raw=true",
    title: "New Beer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis quo culpa cupiditate repellendus nobis odit ratione illo molestias praesentium! Tempore rem non vero consequatur molestiae, eius accusantium maiores? Non?", url:"/new"
  }
];

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            {directions.map((e,i) => {
              return <Cards image={e.image} title={e.title} description={e.description} url={e.url} /> 
              }) 
            }
          </div>
        </div>
      </div>
    );
  }
}

import React, {Component} from "react";
import Card from "../components/Card";

export class Home extends Component {
  
  render() {
  return(
    <div>
      <Card img="https://broadwayheightschico.com/wp-content/uploads/2012/03/Beers-500x375.jpg" url="/beers" title="All Beers" description="Click here if you want to see the most wonderful list in the world..." />
      <Card img="https://media.pri.org/s3fs-public/styles/story_main/public/story/images/Beer%20crop.jpg?itok=wyrVLA1q" title="Random Beer" url="/random-beer" description="Click here if you want us to pick a random beer for you" />
      <Card img="https://mutesi.net/wp-content/uploads/2018/08/beer-glass.jpg" title="New Beer" url="/new-beer" description="Do you like brewing your own beers? Please, feel free to add them to our awesome database" />
    </div>
  )
  };
};
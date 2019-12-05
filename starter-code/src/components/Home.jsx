import React, { Component } from "react";
import Hero from "./Hero";

export default class Home extends Component {
  render() {
      let text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem voluptate assumenda eligendi tenetur nostrum ipsam distinctio aliquam animi saepe, cupiditate vitae vero consectetur, quis corporis molestias est aut, ab error.'
    return (
      <React.Fragment>
        <Hero src='./images/beers.png' title='All Beers' text={text} route={'beers'}></Hero>
        <Hero src='./images/random-beer.png' title='Random Beer' text={text} route={'random-beer'}></Hero>
        <Hero src='./images/new-beer.png' title='New Beer' text={text} route={'new-beer'}></Hero>
      </React.Fragment>
    );
  }
}



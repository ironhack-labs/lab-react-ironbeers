import React, { Component } from "react";

import View from "./View";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <View
          link="/beers"
          image="./image/image1.png"
          title="All Beers"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <View
          link="/random-beer"
          image="./image/image2.png"
          title="Random Beers"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <View
          link="/new-beer"
          image="./image/image3.png"
          title="New Beers"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
    );
  }
}

export default HomePage;

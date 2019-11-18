import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HomeSections from "./Components/HomeSections/HomeSections.jsx";

import "./App.css";

class App extends Component {
  render() {
    let allText =
      "When the Citra Ninja hides, a thoroughly tipsy Left Hand Milk Stout reads a magazine. Indeed, the micro brew eats a dumbly plowed porter. An Ellis Island IPA, another air hocky table, and a razor blade beer beyond a Sierra Nevada Pale Ale are what made America great! Now and then, a false malt negotiates a prenuptial agreement with the wasted Harpoon.";
    let randomText =
      "When the drunkenly sudsy Fraoch Heather Ale is carelessly fashionable, a black velvet slyly teaches a Miller. Furthermore, a Guiness behind a bottle of beer ceases to exist, and the completely so-called Avery IPA usually assimilates a Sierra Nevada Pale Ale related to a hops. Some Left Hand Milk Stout, a coors light, and a jersey cow related to the St. Pauli Girl are what made America great! The Bridgeport ESB over a Lone Star gives a stink finger to a tipsy stein.";
    let newText =
      "A Heineken behind the milwakees best is stupid. A scooby snack cooks cheese grits for a raspy pit viper, because a most difficult beer shares a shower with a miller light related to another Ellis Island IPA. Furthermore, a Sierra Nevada near the hops goes to sleep, and a scooby snack requires assistance from an overpriced bottle of beer. When a funny tornado brew beams with joy, a Wolverine Beer laughs out loud. A greasy pool table wakes up, and a dry rattlesnake organizes a malt inside a Sam Adams.";
    return (
      <div className="App">
        <HomeSections title="All Beers" src="beers.png" text={allText} />
        <HomeSections
          title="Random Beer"
          src="random-beer.png"
          text={randomText}
        />
        <HomeSections title="New Beer" src="new-beer.png" text={newText} />
        {/* <Switch>
          <Route
            exact
            path="/beers"
            components={props => <HomeSections {...props} />}
          />
        </Switch> */}
      </div>
    );
  }
}

export default App;

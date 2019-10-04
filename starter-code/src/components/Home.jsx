import React, { Component } from "react";
import picture1 from "../images/beers.png";
import picture2 from "../images/random-beer.png";
import picture3 from "../images/new-beer.png";
import { NavLink } from "react-router-dom";
import paths from "../paths.json";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="all-beers">
          <NavLink to={paths.all.path}>
            <img src={picture1} alt="beers image" />
            <h1>All Beers</h1>
            <p>
              Praesent ligula felis, pretium luctus suscipit quis, tempus id
              ante. Phasellus ante ipsum, auctor non dui nec, vehicula consequat
              sem. Fusce enim libero, placerat id metus ut, dignissim pretium
              mi. Pellentesque a tortor vitae eros vulputate tristique at nec
              felis. Quisque ante risus, posuere id turpis id, tincidunt mattis
              nisi. Fusce sed vulputate sapien. Ut ligula urna, maximus at urna
              eu, placerat faucibus metus. Fusce sapien ex, commodo eget quam
              luctus, lacinia pulvinar sapien. Aenean ornare, lacus sit amet
              tempor elementum, leo enim maximus lectus, in lacinia ipsum sem
              rutrum justo. Cras vel nibh id diam pharetra condimentum at id
              nibh. Mauris a velit condimentum, blandit dui id, vulputate nulla.
            </p>
          </NavLink>
        </section>

        <section id="random-beer">
          <NavLink to={paths.random.path}>
            <img src={picture2} alt="beers image" />
            <h1>Random Beer</h1>
            <p>
              Donec turpis risus, ultrices quis elit et, venenatis dapibus est.
              Duis vel efficitur ex. Quisque enim augue, condimentum eu odio in,
              vehicula condimentum sapien. Aenean bibendum finibus dui, eu
              aliquam enim sodales et. Etiam facilisis risus lacinia bibendum
              pretium. Ut pharetra vestibulum odio, vitae hendrerit augue congue
              vel. Sed quis nunc elementum, posuere mauris quis, congue eros.
              Sed auctor faucibus turpis, eu eleifend nibh congue ut. Aenean
              sollicitudin nisl ut ex rutrum ultrices. Curabitur ornare dui
              velit, non varius nibh facilisis non. Mauris interdum turpis sed
              finibus venenatis.
            </p>
          </NavLink>
        </section>

        <section id="new-beer">
          <NavLink to={paths.new.path}>
          <img src={picture3} alt="beers image" />
          <h1>New Beer</h1>
          <p>
            Aliquam erat volutpat. Nullam luctus, erat luctus interdum faucibus,
            leo justo convallis nunc, vel tempus nunc purus non sem. Cras in
            ante interdum, finibus tellus ut, ultrices mi. Pellentesque et nisi
            facilisis, ullamcorper magna at, sollicitudin erat. Fusce accumsan
            at tellus id facilisis. Curabitur ullamcorper ultrices justo ac
            scelerisque. Suspendisse potenti. Praesent sed rutrum ligula. Nam
            quis arcu tincidunt nulla porttitor ultrices eget quis urna. Vivamus
            molestie risus nec sem iaculis, at malesuada ligula rutrum. Quisque
            vitae quam quis metus ullamcorper blandit. Cras eu massa in libero
            fermentum mollis ac a ex. Mauris ac orci facilisis, elementum turpis
            a, finibus nibh. Suspendisse potenti.
          </p>
          </NavLink>
        </section>
      </div>
    );
  }
}

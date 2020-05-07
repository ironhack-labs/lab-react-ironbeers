import React from "react";
import {
  NavLink
} from "react-router-dom";

function Home() {
  return ( <
    div >
    <
    NavLink exact to = "/beers" >
    <
    img className = "homeImg"
    src = "/images/beers.png"
    alt = "beers" / >
    <
    /NavLink>{" "} <
    p >
    All the Beers! < br / >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptas asperiores, minus unde ullam minima est.Minima earum facere est illo ipsam, repellendus blanditiis perferendis iure rem ab inventore,
    doloremque eius. {
      " "
    } <
    /p> <
    NavLink exact to = "/random-beer" >
    <
    img className = "homeImg"
    src = "/images/random-beer.png"
    alt = "random beers" / >
    <
    /NavLink>{" "} <
    p >
    A random beer! < br / >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.Accusamus porro, architecto assumenda perferendis neque et veniam illo sint voluptates, cupiditate sapiente fugiat ratione magni, mollitia nemo itaque dolores molestiae tempore ?
    <
    /p> <
    NavLink exact to = "/random-beer" >
    <
    img className = "homeImg"
    src = "/images/new-beer.png"
    alt = "random beers" / >
    <
    /NavLink>{" "} <
    p >
    Add a new beer! < br / >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt, id alias delectus error molestiae nihil iusto architecto, dolorem iste eveniet atque placeat corporis explicabo.Odio temporibus laborum blanditiis ut iure. {
      " "
    } <
    /p>{" "} <
    /div>
  );
}

export default Home;
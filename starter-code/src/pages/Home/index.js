import React, { Component } from "react";
import MenuCard from "./MenuCard";


export default class Home extends Component {
    render() {
        return (
            <>
            <h1 style={{
                marginTop: "90px",
                textAlign: "center"
            }}>
               IronBeers
            </h1>
                <MenuCard img='./images/beers.png' name='All Beers' route='/all-beers' />
                <MenuCard img='./images/random-beer.png' name='Random Beer'  route='/random-beer'/>
                <MenuCard img='./images/new-beer.png' name='New Beer' route='/new'/>
            </>
        )
    }
}
import React, { Component } from 'react';
import RandomBeer from "./RandomBeer.js"
import Header from "../Header/Header.js"

class getRandomBeer extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <RandomBeer></RandomBeer>
            </div>
        );
    }
}

export default getRandomBeer;
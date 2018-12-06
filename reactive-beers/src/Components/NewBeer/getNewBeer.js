import React, { Component } from 'react';
import NewBeer from "./NewBeer.js"
import Header from "../Header/Header.js"

class getNewBeer extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <NewBeer></NewBeer>
            </div>
        );
    }
}

export default getNewBeer;
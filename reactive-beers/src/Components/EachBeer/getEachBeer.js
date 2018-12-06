import React, { Component } from 'react';
import EachBeer from "./EachBeer.js"
import Header from "../Header/Header.js"

class getEachBeer extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <EachBeer></EachBeer>
            </div>
        );
    }
}

export default getEachBeer;
import React, { Component } from 'react';
import Beer from "./Beers.js"
import Header from "../Header/Header.js"

class getBeer extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Beer></Beer>
            </div>
        );
    }
}

export default getBeer;
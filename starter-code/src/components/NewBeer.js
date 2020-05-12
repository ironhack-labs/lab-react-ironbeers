import React, {Component} from "react";
import {postNewBeer} from "../services/BeersDS";

export default class NewBeer extends Component {
    render() {
        return(
            <div className="newBeerMainDiv">
                <p></p>
                <input type="text" name="" id=""/>
                <p></p>
                <input type="text" name="" id=""/>
                <p></p>
                <input type="text" name="" id=""/>
                <p></p>
                <input type="text" name="" id=""/>
                <p></p>
                <input type="text" name="" id=""/>
            </div>
        )
    }
}